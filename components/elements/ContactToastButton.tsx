'use client'
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactToastButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const router = useRouter();
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const addTimer = (fn: () => void, delay: number) => {
      const id = setTimeout(fn, delay);
      timersRef.current.push(id);
      return id;
    };

    const showToast = () => {
      setIsRendered(true);
      addTimer(() => setIsVisible(true), 50);
      addTimer(() => {
        setIsVisible(false);
        addTimer(() => setIsRendered(false), 500);
      }, 7000);
    };

    // Show toast initially after 5 seconds
    addTimer(showToast, 5000);

    // Set up interval to show toast every 30 seconds
    const interval = setInterval(showToast, 30000);

    // Clean up ALL timers and interval on unmount
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
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
