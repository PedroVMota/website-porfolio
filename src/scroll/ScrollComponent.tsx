import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrollComponent.css'; // Import the CSS for animations

const ScrollComponent = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.01, // Trigger when 10% of the component is visible
  });

  return (
    <div ref={ref} className={`slide-in ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollComponent;