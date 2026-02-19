'use client';

import { useScrollThreshold } from '@/hooks/useScrollThreshold';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({
  className = ''
}: ScrollIndicatorProps) => {
  const hasScrolledPast = useScrollThreshold(150);
  const visible = !hasScrolledPast;

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