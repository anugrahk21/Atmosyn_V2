'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactToastButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show toast initially after 5 seconds
    const initialTimeout = setTimeout(() => {
      setIsRendered(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50); // Small delay to ensure DOM update before animation starts
      
      // Auto-hide after 7 seconds
      setTimeout(() => {
        setIsVisible(false);
        // Wait for fade-out animation to complete before removing from DOM
        setTimeout(() => {
          setIsRendered(false);
        }, 500); // Match transition duration in CSS
      }, 7000);
    }, 5000);

    // Set up interval to show toast every 30 seconds (adjust as needed)
    const interval = setInterval(() => {
      setIsRendered(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
      
      // Auto-hide after 7 seconds
      setTimeout(() => {
        setIsVisible(false);
        // Wait for fade-out animation to complete before removing from DOM
        setTimeout(() => {
          setIsRendered(false);
        }, 500); // Match transition duration in CSS
      }, 7000);
    }, 30000);

    // Clean up timeouts and intervals on component unmount
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default navigation
    setIsVisible(false);
    
    // Navigate to contact page
    router.push('/contact');
    
    // Wait for fade-out animation and page transition
    setTimeout(() => {
      setIsRendered(false);
      
      // After navigation, scroll to the contact form
      setTimeout(() => {
        const contactFormElement = document.getElementById('contact-form');
        if (contactFormElement) {
          contactFormElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }); // Small delay to ensure the page has loaded
    }, 300); // Match transition duration in CSS
  };

  return (
    <div className={`contact-toast-button-container ${isVisible ? 'visible' : ''}`}>
      {isRendered && (
        <a
          className="btn big-circle-btn gsap-magnetic hero-contact-btn"
          href="/contact#contact-form"
          onClick={handleContactClick}
        >
          LET'S TALK
        </a>
      )}
    </div>
  );
}
