'use client'

import React, { useState } from 'react'
import services from '../../util/services.json'; // Import the services data

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ title = "GET IN TOUCH", subtitle = "Got a project you want to collaborate on? \nOr just fancy a chat?" }: ContactFormProps) {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '', 
    phone: '',
    service: '',
    contactPreference: 'call',
    message: '', // Shown when contactPreference is 'message'
    callDate: '', // Shown when contactPreference is 'call'
    callTime: ''  // Shown when contactPreference is 'call'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error' | 'idle'; message: string }>({ type: 'idle', message: '' }); // Added state for submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (submissionStatus.type !== 'idle') { // Reset status message on new input
        setSubmissionStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus({ type: 'idle', message: '' }); // Reset status on new submission

    try {
      // Using no-cors mode to bypass CORS issues during development
      const response = await fetch('https://script.google.com/macros/s/AKfycbwFD6BpE99nBy7UzmoKp4s5TYSvJZYmmOdH96hNNczFiWs_Cacczr377qroeav1ZladcA/exec', {
        method: 'POST',
        mode: 'no-cors', // This should allow the request to proceed without CORS errors
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      // When using no-cors mode, response.ok will always be false
      // and you won't be able to read the response body
      // So we'll just assume success if the fetch completes without throwing an error
      
      setSubmissionStatus({ type: 'success', message: 'Your message has been sent successfully!' }); // Set success message
      setFormData({ 
        name: '', 
        email: '', 
        countryCode: '',
        phone: '',
        service: '',
        contactPreference: 'message',
        message: '', 
        callDate: '',
        callTime: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' }); // Set error message
    } finally {
      setIsSubmitting(false);
    }
  };  return (
    <div className="contact-form-wrap" style={{ height: '950px' }}>
      {/* Only render section title if title or subtitle is provided */}
      {(title || subtitle) && (
        <div className="section__title mb-60 wow img-custom-anim-left">
          {title && <h2 className="title">{title}</h2>}
          {subtitle && (
            <p className="sec-text mt-3">
              {/* Using a hardcoded approach to ensure line break works */}
              Got a project you want to collaborate on?<br />
              Or just fancy a chat?
            </p>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} className="contact__form ajax-contact">
        <div className="row gy-35 pb-30">
          {/* ...existing code... */}
          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>            <input
              type="text"
              className="form-control style-border"
              name="name"
              id="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ paddingLeft: '40px' }}
            />
          </div>          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>            <input
              type="email"
              className="form-control style-border"
              name="email"
              id="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ paddingLeft: '40px' }}
            />
          </div>          <div className="col-12 form-group">
            <div className="row">
              <div className="col-md-5 mb-3 mb-md-0">
                <div className="position-relative">                  <label className="form-icon-left"><i className="fas fa-globe"></i></label>
                  <select
                    name="countryCode"
                    className="form-control style-border"
                    value={formData.countryCode || ''}
                    onChange={handleChange}
                    style={{ paddingLeft: '40px' }}
                    required={formData.contactPreference === 'call'}
                  >
                    <option value="" disabled>Select Country Code*</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+33">+33 (France)</option>
                    <option value="+49">+49 (Germany)</option>
                    <option value="+86">+86 (China)</option>
                    <option value="+81">+81 (Japan)</option>
                  </select>
                </div>
              </div>
              <div className="col-md-7">
                <div className="position-relative">                  <label className="form-icon-left"><i className="fas fa-phone-alt"></i></label>
                  <input
                    type="tel"
                    className="form-control style-border"
                    name="phone"
                    placeholder={formData.contactPreference === 'call' ? "Phone Number*" : "Phone Number"}
                    value={formData.phone || ''}
                    onChange={handleChange}
                    style={{ paddingLeft: '40px' }}
                    required={formData.contactPreference === 'call'}
                  />
                </div>
              </div>
            </div>
          </div>          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
            <select
              name="service"
              className="form-control style-border custom-dropdown"
              value={formData.service}
              onChange={handleChange}
              required
              style={{ paddingLeft: '40px' }} // Add left padding to prevent overlap with icon
            >
              <option value="" disabled>Select a Service*</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>{service.title}</option>
              ))}
            </select>
          </div>
            {/* Contact Preference Selection */}
          <div className="col-12 form-group mt-3">
            <h5 className="mb-3">How would you like us to contact you?</h5>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="preferCall"
                  name="contactPreference"
                  value="call"
                  checked={formData.contactPreference === 'call'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="preferCall">
                  Schedule a Call
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="preferMessage"
                  name="contactPreference"
                  value="message"
                  checked={formData.contactPreference === 'message'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="preferMessage">
                  Send a Message
                </label>
              </div>
            </div>
          </div>{/* Conditional Fields Based on Contact Preference */}          {formData.contactPreference === 'call' ? (
            <div className="col-12 form-group">
              <div className="row">
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="position-relative">                    <label className="form-icon-left"><i className="far fa-calendar-alt"></i></label>                    <input
                      type="date"
                      className="form-control style-border"
                      name="callDate"
                      placeholder="Preferred Date"
                      value={formData.callDate || ''}
                      onChange={handleChange}
                      required
                      style={{ paddingLeft: '40px' }}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>                <div className="col-md-6">
                  <div className="position-relative">                    <label className="form-icon-left"><i className="far fa-clock"></i></label>
                    <select
                      name="callTime"
                      className="form-control style-border"
                      value={formData.callTime || ''}
                      onChange={handleChange}
                      required
                      style={{ paddingLeft: '40px' }}
                    >
                      <option value="" disabled>Select Time</option>
                      <option value="09:00-10:00">09:00 AM - 10:00 AM</option>
                      <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                      <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                      <option value="12:00-01:00">12:00 PM - 01:00 PM</option>
                      <option value="01:00-02:00">01:00 PM - 02:00 PM</option>
                      <option value="02:00-03:00">02:00 PM - 03:00 PM</option>
                      <option value="03:00-04:00">03:00 PM - 04:00 PM</option>
                      <option value="04:00-05:00">04:00 PM - 05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <small className="form-text text-muted d-block mt-2">Select your preferred date and time for the call</small>
            </div>
          ) : (
            <div className="col-12 form-group">
              <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
              <textarea
                name="message"
                placeholder="Message*"
                id="contactForm"
                className="form-control style-border"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ minHeight: '100px', maxHeight: '180px', resize: 'vertical', overflowY: 'auto', marginBottom: '10px' }}
              />
            </div>
          )}
        </div>
        {/* Display ONLY Error Submission Status */}
        {submissionStatus.type === 'error' && (
          <p style={{
             marginTop: '20px',
             color: 'var(--tg-color-red-default)',
             textAlign: 'center',
             fontWeight: '500'
           }}>
            {submissionStatus.message}
          </p>
        )}
        <button 
          type="submit" 
          className={`btn btn-three square-btn ${submissionStatus.type === 'success' ? 'success-state' : ''}`} 
          disabled={isSubmitting || submissionStatus.type === 'success'}
          style={{ marginTop: '0' }}
        >
          {isSubmitting
            ? 'Sending...'
            : submissionStatus.type === 'success'
            ? 'Message sent! We\'ll reply soon.'
            : 'SEND MESSAGE'}
        </button>
      </form>
    </div>
  )
}
