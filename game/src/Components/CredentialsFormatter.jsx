import React, { useState, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SelectedStudentsPrint from './selectedStudentsPrint';

const API_URL = 'http://localhost:5000/api';

const StudentList = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    stream: '',
    courseCode: '',
    studentId: ''
  });

  // Fetch students from API
  const fetchStudents = async () => {
    try {
      console.log('Fetching students...');
      const response = await fetch(`${API_URL}/students`);
      console.log('Response:', response);
      if (!response.ok) throw new Error('Failed to fetch students');
      const data = await response.json();
      console.log('Fetched data:', data);
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSelect = (student) => {
    if (selectedStudents.some(s => s.studentId === student.studentId)) {
      setSelectedStudents(selectedStudents.filter((s) => s.studentId !== student.studentId));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (newStudent.firstName.trim() && newStudent.lastName.trim() && newStudent.studentId) {
      try {
        const studentData = {
          ...newStudent,
          studentId: parseInt(newStudent.studentId)
        };

        const response = await fetch(`${API_URL}/students`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(studentData),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to add student');
        }
        
        await fetchStudents();
        setNewStudent({
          firstName: '',
          lastName: '',
          stream: '',
          courseCode: '',
          studentId: ''
        });
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.name.endsWith('.csv')) {
        setError('Please select a CSV file');
        event.target.value = '';
        return;
      }
      setSelectedFile(file);
      setError(null);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${API_URL}/students/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to upload file');
      }

      const result = await response.json();
      console.log('Upload result:', result);
      setError(null);
      setSelectedFile(null);
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      await fetchStudents();
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      const response = await fetch(`${API_URL}/students/${studentId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete student');
      }
      
      await fetchStudents();
      setSelectedStudents(selectedStudents.filter(student => student.studentId !== studentId));
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePrint = (selectedStudents) => {
    // Generate the HTML content using the SelectedStudentsPrint component
    const printContent = renderToStaticMarkup(
      <SelectedStudentsPrint students={selectedStudents} />
    );
  
    // Open a new window and print the content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Students</title>
          <style>
            body { font-family: Arial, sans-serif; }
          </style>
        </head>
        <body>${printContent}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const filteredStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="mb-4 flex gap-2 items-center">
        <div className="flex-grow flex gap-2 items-center">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileSelect}
            className="flex-grow"
          />
          <button
            onClick={handleFileUpload}
            disabled={!selectedFile || isUploading}
            className={`px-4 py-2 rounded ${
              !selectedFile || isUploading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isUploading ? 'Uploading...' : 'Upload CSV'}
          </button>
        </div>
        <input
          type="text"
          placeholder="Search students..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="print-button"
          onClick={() => handlePrint(selectedStudents)}
        >
          Print Selected
        </button>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Stream</th>
            <th>Course Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.studentId}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedStudents.some(s => s.studentId === student.studentId)}
                  onChange={() => handleSelect(student)}
                  className="checkbox"
                />
              </td>
              <td>{student.studentId}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.stream}</td>
              <td>{student.courseCode}</td>
              <td>
                <button
                  onClick={() => handleDeleteStudent(student.studentId)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;