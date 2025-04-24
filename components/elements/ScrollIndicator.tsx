'use client';

import { useEffect, useState } from 'react';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({ 
  className = ''
}: ScrollIndicatorProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled down more than 150px
      if (window.scrollY > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {visible && (
        <a 
          className={`scroll__down scroll-to-target ${className} ${!visible ? 'hidden' : ''}`}
          onClick={handleClick}
        >
          <i className="fas fa-arrow-down" />
        </a>
      )}
    </>
  );
};

export default ScrollIndicator;