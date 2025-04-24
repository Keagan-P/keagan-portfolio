import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <p>Cultivating Connections: Reach Out And Connect With Me</p>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <select>
          <option value="">Service Of Interest</option>
          {/* Add your service options here */}
        </select>
        <input type="text" placeholder="Timeline" />
        <textarea placeholder="Project Details..."></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;