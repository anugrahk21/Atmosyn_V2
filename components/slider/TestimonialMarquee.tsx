'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import testimonialData from "@/util/testimonials.json"

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  photo: string;
  text: string;
  tags: string[];
}

interface TestimonialMarqueeProps {
  filter?: string[];
  limit?: number;
  speed?: number;
  direction?: 'left' | 'right';
  colorMode?: 'light' | 'dark' | 'auto';
}

export default function TestimonialMarquee({ 
  filter = ['homepage'], 
  limit = 0,
  speed = 40,
  direction = 'left',
  colorMode = 'auto' 
}: TestimonialMarqueeProps) {
  // Process testimonials directly from the JSON data
  const allTestimonials = testimonialData as Testimonial[];
  
  // Filter testimonials by tags if filter is provided
  const filteredTestimonials = filter && filter.length > 0
    ? allTestimonials.filter(testimonial => 
      filter.some(tag => testimonial.tags.includes(tag))
    )
    : allTestimonials;
  
  // Apply limit if specified
  const testimonials = limit > 0 ? filteredTestimonials.slice(0, limit) : filteredTestimonials;
  
  // Determine which color class to apply based on colorMode
  const colorClass = colorMode === 'dark' ? 'testimonial-dark-mode' : 'testimonial-light-mode';
  
  return (
    <div className={`testimonial-marquee-container ${colorClass}`}>
      <Marquee 
        speed={speed} 
        direction={direction} 
        gradient={false} 
        pauseOnHover={true}
        className="testimonial-marquee"
      >        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-marquee-card" onClick={() => window.location.href = '/testimonials'} role="button" tabIndex={0} aria-label={`View all testimonials from ${testimonial.name}`}>
            <div className="testimonial-marquee-inner">
              <div className="testimonial-marquee-top">
                <div className="testimonial-marquee-avatar">
                  <img src={testimonial.photo} alt={testimonial.name} />
                </div>
                <div className="testimonial-marquee-meta">
                  <h4 className="testimonial-marquee-name">{testimonial.name}</h4>
                  <p className="testimonial-marquee-position">
                    {testimonial.designation}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="testimonial-marquee-content">
                <div className="testimonial-marquee-icon">
                  <img src="/assets/img/icon/quote-left.svg" alt="quote" className="injectable" />
                </div>
                <p className="testimonial-marquee-text">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
