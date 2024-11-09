const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const fs = require('fs');

// Ensure the database directory exists
const dbPath = path.join(__dirname, '..', 'database.sqlite');
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Create a new Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: console.log, // Enable logging temporarily for debugging
  define: {
    // Prevent Sequelize from pluralizing table names
    freezeTableName: true
  }
});

// Define the Student model
const Student = sequelize.define('Student', {
  studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  stream: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  courseCode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
  // Specify the table name explicitly
  tableName: 'Student',
  // Disable timestamps if you don't need them
  timestamps: true
});

// Function to initialize the database
async function initializeDatabase() {
  try {
    // Check connection
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Force sync the database (this will drop existing tables and recreate them)
    // WARNING: Only use force: true in development
    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully');

    // Create a test record to verify the table structure
    await Student.create({
      studentId: 1000,
      firstName: 'Test',
      lastName: 'Student',
      stream: 'Test Stream',
      courseCode: 'TEST101'
    });
    console.log('Test record created successfully');

    // Verify the table structure
    const tableInfo = await sequelize.query(
      "SELECT sql FROM sqlite_master WHERE type='table' AND name='Student';",
      { type: sequelize.QueryTypes.SELECT }
    );
    console.log('Table structure:', tableInfo);

  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
}

module.exports = {
  sequelize,
  Student,
  initializeDatabase
};