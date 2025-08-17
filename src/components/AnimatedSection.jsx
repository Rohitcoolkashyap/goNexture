import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  ...props 
}) => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'animate-fade-in-up' : 'section-hidden';
      case 'scale-in':
        return isVisible ? 'animate-scale-in' : 'scale-hidden';
      case 'slide-left':
        return isVisible ? 'animate-slide-in-left' : 'slide-left-hidden';
      case 'slide-right':
        return isVisible ? 'animate-slide-in-right' : 'slide-right-hidden';
      default:
        return isVisible ? 'animate-fade-in-up' : 'section-hidden';
    }
  };

  const animationStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1200 ${getAnimationClass()} ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
