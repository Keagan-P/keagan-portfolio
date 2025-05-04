import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container" id="contact">
      <h2>Contact Me</h2>
      <p>Cultivating Connections: Reach Out And Connect With Me</p>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <select>
          <option value="">Service Of Interest</option>
          <option value="web-design">Web Design</option>
          <option value="ui-ux">UI/UX Design</option>
          <option value="development">Database Development</option>
          <option value="seo">Figma Designs</option>
          <option value="consultation">Consultation</option>
        </select>
        <input type="text" placeholder="Timeline" />
        <textarea placeholder="Project Details..."></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;