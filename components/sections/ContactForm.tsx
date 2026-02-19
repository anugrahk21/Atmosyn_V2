'use client'
import { WhatsAppButtonOffcanvas } from "@/components/elements/WhatsAppButton"
import React, { useState } from 'react'
import services from '../../util/services.json'; // Import the services data
import { getWhatsAppUrl, COUNTRY_CODES, TIME_SLOTS, GOOGLE_APPS_SCRIPT_URL } from '@/util/constants';

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

  const whatsappUrl = getWhatsAppUrl('Hello! I would like to know more about your services.');

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

    // Store the current contact preference to preserve it after form reset
    const currentPreference = formData.contactPreference;

    // Prepare form data to send - add a prefix to country code to prevent Google Sheets from interpreting it as a date
    const formDataToSend = {
      ...formData,
      // Add a text prefix to the country code to ensure it's treated as text in Google Sheets
      countryCode: formData.countryCode ? `'${formData.countryCode}` : ''
    };

    try {
      // Using no-cors mode to bypass CORS issues during development
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // This should allow the request to proceed without CORS errors
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
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
        contactPreference: currentPreference, // Preserve the user's contact preference
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
  }; return (
    <div className="contact-form-wrap">
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

      {/* WhatsApp section - moved outside conditional rendering */}
      <div className="whatsapp-section mb-20">
        <h5 className="subtitle">Just WhatsApp us?</h5>
        <div className="whatsapp-button-container d-flex align-items-center">
          <a
            href={whatsappUrl}
            className="btn btn-three"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '16px',
              padding: '12px 24px'
            }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
            WhatsApp Us
          </a>
        </div>
        <h5 className="subtitle mt-40">Or just fill out the form below</h5>
      </div>

      <form onSubmit={handleSubmit} className="contact__form ajax-contact">
        <div className="row gy-35 pb-30">
          {/* ...existing code... */}
          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>            <input
              type="text"
              className="form-control style-border form-control-icon-padding"
              name="name"
              id="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>            <input
              type="email"
              className="form-control style-border form-control-icon-padding"
              name="email"
              id="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>          <div className="col-12 form-group">
            <div className="row">
              <div className="col-md-5 mb-3 mb-md-0">
                <div className="position-relative">                  <label className="form-icon-left"><i className="fas fa-globe"></i></label>
                  <select
                    name="countryCode"
                    className="form-control style-border form-control-icon-padding"
                    value={formData.countryCode || ''}
                    onChange={handleChange}
                    required={formData.contactPreference === 'call'}
                  >
                    <option value="" disabled>Select Country Code*</option>
                    {COUNTRY_CODES.map(({ code, label }) => (
                      <option key={code} value={code}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-7">
                <div className="position-relative">                  <label className="form-icon-left"><i className="fas fa-phone-alt"></i></label>
                  <input
                    type="tel"
                    className="form-control style-border form-control-icon-padding"
                    name="phone"
                    placeholder={formData.contactPreference === 'call' ? "Phone Number*" : "Phone Number"}
                    value={formData.phone || ''}
                    onChange={handleChange}
                    required={formData.contactPreference === 'call'}
                  />
                </div>
              </div>
            </div>
          </div>          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
            <select
              name="service"
              className="form-control style-border custom-dropdown form-control-icon-padding"
              value={formData.service}
              onChange={handleChange}
              required
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
                    className="form-control style-border form-control-icon-padding"
                    name="callDate"
                    placeholder="Preferred Date"
                    value={formData.callDate || ''}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                  </div>
                </div>                <div className="col-md-6">
                  <div className="position-relative">                    <label className="form-icon-left"><i className="far fa-clock"></i></label>
                    <select
                      name="callTime"
                      className="form-control style-border form-control-icon-padding"
                      value={formData.callTime || ''}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select Time</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>{slot.split('-')[0].trim()} - {slot.split('-')[1].trim()}</option>
                      ))}
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
                className="form-control style-border textarea-contact"
                value={formData.message}
                onChange={handleChange}
                required
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
          }}>{submissionStatus.message}</p>
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
  );
}
