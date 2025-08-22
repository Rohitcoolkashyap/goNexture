import React, { useEffect, useState, useCallback, useRef } from 'react';

const CursorFollower = React.memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const throttleRef = useRef(null);

  const updateMousePosition = useCallback((e) => {
    if (throttleRef.current) {
      cancelAnimationFrame(throttleRef.current);
    }
    
    throttleRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if we're hovering over a magnetic element
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        const magneticElement = elementUnderCursor.classList.contains('cursor-magnetic') 
          ? elementUnderCursor 
          : elementUnderCursor.closest('.cursor-magnetic');
        setIsHovering(!!magneticElement);
      } else {
        setIsHovering(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (throttleRef.current) {
        cancelAnimationFrame(throttleRef.current);
      }
    };
  }, [updateMousePosition]);

  return (
    <div className="hidden lg:block">
      {/* Main cursor follower */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.2s ease-out',
          opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-80"></div>
      </div>

      {/* Secondary cursor trail */}
      <div
        className="fixed pointer-events-none z-[9998] transition-opacity duration-300"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isHovering ? 2 : 1})`,
          transition: 'transform 0.3s ease-out',
          opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1
        }}
      >
        <div className="w-10 h-10 border-2 border-white/20 rounded-full animate-pulse"></div>
      </div>

      {/* Particles that follow cursor */}
      <div
        className="fixed pointer-events-none z-[9997] transition-opacity duration-300"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1
        }}
      >
        <div className="relative w-16 h-16">
          <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ left: '10px', top: '5px' }}></div>
          <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ left: '45px', top: '15px', animationDelay: '0.5s' }}></div>
          <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ left: '25px', top: '40px', animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
});

CursorFollower.displayName = 'CursorFollower';

export default CursorFollower;
