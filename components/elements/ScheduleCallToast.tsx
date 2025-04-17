'use client'
import { useEffect, useState } from 'react';

export default function ScheduleCallToast() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Show toast initially after 3 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
      
      // Hide initial toast after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 3000);    // Set up interval to show toast every 30 seconds
    const interval = setInterval(() => {
      setIsVisible(true);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 30000);

    // Clean up
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <div className={`schedule-call-toast ${isVisible ? 'visible' : ''}`}>
      <div className="schedule-toast-content">
        <div className="toast-icon">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="toast-info">
          <div className="toast-title">Quick Consultation</div>
          <div className="toast-text">Schedule a call to know more</div>
        </div>
        <div className="toast-actions">
          <a href="/contact" className="toast-button">Book Call</a>
          <button className="toast-close" onClick={handleClose} aria-label="Close notification">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
