import React from 'react';

const SelectedStudentsPrint = ({ students }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Selected Students</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {students.map((student, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{student.firstName} {student.lastName}</strong><br />
            Student ID: {student.studentId}<br />
            Stream: {student.stream}<br />
            Course Code: {student.courseCode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedStudentsPrint;
