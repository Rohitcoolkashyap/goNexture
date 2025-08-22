import React, { useMemo } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSection = React.memo(({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  ...props 
}) => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const animationClass = useMemo(() => {
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
  }, [animation, isVisible]);

  const animationStyle = useMemo(() => 
    delay > 0 ? { animationDelay: `${delay}s` } : {}, 
    [delay]
  );

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1200 ${animationClass} ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
