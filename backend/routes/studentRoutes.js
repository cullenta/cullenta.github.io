const express = require('express');
const router = express.Router();
const { Student } = require('../models/db');
const multer = require('multer');
const csv = require('csv-parse');
const upload = multer({ storage: multer.memoryStorage() });

// Get all students
router.get('/', async (req, res) => {
  try {
    console.log('Attempting to fetch students...');
    const students = await Student.findAll();
    console.log('Successfully fetched students:', students);
    res.json(students);
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({ 
      message: 'Error fetching students', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Upload CSV
router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const parser = csv.parse({
    columns: true,
    skip_empty_lines: true,
    trim: true,
    relax_quotes: true, // Add this line
    relax_column_count: true // To handle unexpected column issues
  });

  const records = [];
  
  parser.on('readable', async function() {
    let record;
    while ((record = parser.read()) !== null) {
      // Split the name without expecting quotes
      const nameParts = record['Student Name'].split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ');

      records.push({
        studentId: parseInt(record['Student ID']), // Remove quotes from column name
        firstName,
        lastName,
        stream: record['Stream (Abbr)'], // Update column name to match CSV
        courseCode: record['Course (Code)'] // Update column name to match CSV
      });
    }
  });

  parser.on('end', async function() {
    try {
      // Use bulkCreate with upsert to update existing records and create new ones
      await Student.bulkCreate(records, {
        updateOnDuplicate: ['firstName', 'lastName', 'stream', 'courseCode'],
      });
      res.json({ message: `Successfully processed ${records.length} records` });
    } catch (error) {
      res.status(500).json({ message: 'Error processing CSV', error: error.message });
    }
  });

  parser.write(req.file.buffer.toString());
  parser.end();
});

// Delete a student
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Student.destroy({
      where: { studentId: id }
    });
    if (deleted) {
      res.json({ message: 'Student deleted' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
});

module.exports = router;