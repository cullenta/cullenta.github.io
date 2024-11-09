import React, { useState } from 'react';
import './styles/AddStudentModal.css';

const AddStudentModal = ({ isOpen, onClose, onAddStudent }) => {
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    stream: '',
    courseCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    onClose(); // Close the modal after adding the student
    setFormData({ studentId: '', firstName: '', lastName: '', stream: '', courseCode: '' }); // Reset form
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Student ID:</label>
            <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required />
          </div>
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div>
            <label>Stream:</label>
            <input type="text" name="stream" value={formData.stream} onChange={handleChange} required />
          </div>
          <div>
            <label>Course Code:</label>
            <input type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} required />
          </div>
          <button type="submit">Add Student</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
