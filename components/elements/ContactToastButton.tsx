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
    
    // Check if on mobile or tablet (using 1024px as common tablet width threshold)
    const isMobileOrTablet = window.innerWidth < 1024;
    
    // Hide the toast
    setTimeout(() => {
      setIsRendered(false);
    }, 300);
    
    // Navigate to contact page
    router.push('/contact');
    
    // For mobile and tablet: set up scrolling after navigation
    if (isMobileOrTablet) {
      // Use timeout to wait for navigation to complete
      setTimeout(() => {
        const contactImageElement = document.getElementById('contact-image');
        if (contactImageElement) {
          contactImageElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 800); // Give enough time for the page to fully render
    }
    // For desktop, we just navigate to the contact page without any scrolling
  };

  return (
    <div className={`contact-toast-button-container ${isVisible ? 'visible' : ''}`}>
      {isRendered && (
        <a
          className="btn big-circle-btn gsap-magnetic hero-contact-btn"
          href="/contact"
          onClick={handleContactClick}
        >
          LET'S TALK
        </a>
      )}
    </div>
  );
}
