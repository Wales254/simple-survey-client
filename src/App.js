import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure to import this CSS file

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    email: '',
    description: '',
    stack: '',
    file: null,
  });

  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    // Load preference from localStorage (default: false)
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  // Save preference whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost/Simple-Survey-Api/api/submit_response.php', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message || 'Submitted successfully!');
      } else {
        setMessage(result.error || 'Submission failed.');
      }
    } catch (err) {
      setMessage('Error submitting the form. Please try again.');
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className="container-center">
        <h1>Survey Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <input
            name="stack"
            placeholder="Programming Stack"
            value={formData.stack}
            onChange={handleChange}
            required
          />
          <input name="file" type="file" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}

        {/* Dark mode toggle button */}
        <button 
          type="button" 
          onClick={() => setDarkMode(!darkMode)} 
          className="toggle-btn"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default App;
