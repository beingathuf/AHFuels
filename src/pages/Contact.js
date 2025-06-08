import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    serviceType: "General Service",
    message: "",
  });

  const serviceOptions = [
    "General Service",
    "Oil Change",
    "Engine Diagnostics",
    "Car Detailing",
    "Brake Inspection",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting AH AUTO KING! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      serviceType: "General Service",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="form-overlay" />
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Schedule Your Service</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <label htmlFor="serviceType">Service Type</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <label htmlFor="message">Additional Details (Optional)</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Anything specific you want us to know?"
        />

        <button type="submit" className="submit-btn">Book Service</button>
      </form>
    </div>
  );
};

export default ContactUs;
