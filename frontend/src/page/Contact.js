import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });
  
      const data = await response.json();
  
      setStatus(data.message);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold', backgroundColor: 'slate', padding: '0.5rem',borderRadius: '5px', color: 'red' }}>Contact Us</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: '#f2f2f2', borderRadius: '5px', boxShadow: '0px 0px 5px #888888' }}>
        <label htmlFor="name" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ fontSize: '1.2rem', padding: '0.5rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />

        <label htmlFor="email" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1rem' }}>Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ fontSize: '1.2rem', padding: '0.5rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />

        <label htmlFor="message" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1rem' }}>Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} style={{ fontSize: '1.2rem', padding: '0.5rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc', height: '150px' }} />

        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1.2rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>

        {status && <p style={{ fontSize: '1.2rem', marginTop: '1rem', textAlign: 'center' }}>{status}</p>}
      </form>
</div>

  );
}

export default Contact;

