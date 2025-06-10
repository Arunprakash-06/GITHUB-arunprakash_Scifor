import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',  
    feedback: '',
    rating: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => {
        setMessage('Feedback submitted successfully!');
        setFormData({ name: '', email: '', feedback: '', rating: '' });
      })
      .catch(() => {
        setMessage('Error submitting feedback.');
      });
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label><br />
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange} 
          required 
        /><br /><br />

        <label>Email:</label><br />
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange} 
          required 
        /><br /><br />

        <label>Feedback:</label><br />
        <textarea 
          name="feedback" 
          value={formData.feedback}
          onChange={handleChange} 
          required 
        /><br /><br />

        <label>Rating (1 to 5):</label><br />
        <select 
          name="rating" 
          value={formData.rating}
          onChange={handleChange} 
          required
        >
          <option value="">Select Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select><br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;
