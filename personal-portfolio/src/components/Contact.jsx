import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j5igiok',
        'template_cllb2ag',
        form.current,
        'nkaJ9UhVoBvatPhid'
      )
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '20px auto',
  };

  const inputStyles = {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const submitButtonStyles = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const successMessageStyles = {
    color: '#4CAF50',
    marginTop: '10px',
    textAlign: 'center',
  };

  const h2 = {
    color: "black",
    textAlign: "center",
  };

  return (
    <div id="contact-form">
      <h2 style={h2}>Contact Me</h2> 
      {submitted ? (
        <p style={successMessageStyles}>
          Message sent successfully. Thank you for your message!
        </p>
      ) : (
        <form ref={form} onSubmit={sendEmail} style={formStyles}>
          <label>Name</label>
          <input type="text" name="to_name" style={inputStyles} />
          <label>Email</label>
          <input type="email" name="from_name" style={inputStyles} />
          <label>Message</label>
          <textarea name="message" style={{ ...inputStyles, height: '120px' }} />
          <button type="submit" style={submitButtonStyles}>
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;