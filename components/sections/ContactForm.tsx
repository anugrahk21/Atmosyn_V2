'use client'

import React from 'react'

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ title = "GET IN TOUCH", subtitle = "Got a project you want to collaborate on? \nOr just fancy a chat?" }: ContactFormProps) {
  return (
    <div className="contact-form-wrap">
      <div className="section__title mb-60 wow img-custom-anim-left">
        <h2 className="title">{title}</h2>
        <p className="sec-text mt-3">
          {subtitle.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < subtitle.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
      <form action="mail.php" method="POST" className="contact__form ajax-contact">
        <div className="row gy-35">
          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
            <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
          </div>
          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
            <input type="text" className="form-control style-border" name="website" id="website" placeholder="Organisation*" />
          </div>
          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
            <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
          </div>
          <div className="col-12 form-group">
            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
            <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
          </div>
        </div>
        <button type="submit" className="btn btn-three square-btn mt-60">
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}
