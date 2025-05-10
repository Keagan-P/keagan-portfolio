import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    details: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s()+-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.timeline.trim()) newErrors.timeline = 'Timeline is required';
    if (!formData.details.trim()) newErrors.details = 'Project details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        timeline: '',
        details: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-form-container" id="contact">
      <h2>Contact Me</h2>
      <p>Cultivating Connections: Reach Out And Connect With Me</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Service Of Interest</option>
          <option value="web-design">Web Design</option>
          <option value="ui-ux">UI/UX Design</option>
          <option value="development">Database Development</option>
          <option value="seo">Figma Designs</option>
          <option value="consultation">Consultation</option>
        </select>
        {errors.service && <span className="error">{errors.service}</span>}

        <input
          type="text"
          name="timeline"
          placeholder="Timeline"
          value={formData.timeline}
          onChange={handleChange}
        />
        {errors.timeline && <span className="error">{errors.timeline}</span>}

        <textarea
          name="details"
          placeholder="Project Details..."
          value={formData.details}
          onChange={handleChange}
        ></textarea>
        {errors.details && <span className="error">{errors.details}</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
