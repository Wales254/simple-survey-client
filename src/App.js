import React, { useState } from 'react';
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
    <div className="App">
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
          <br />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <br />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <input
            name="stack"
            placeholder="Programming Stack"
            value={formData.stack}
            onChange={handleChange}
            required
          />
          <br />
          <input name="file" type="file" onChange={handleChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default App;
