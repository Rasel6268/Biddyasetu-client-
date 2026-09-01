"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation({ children, animation = "fade-in-up", delay = 0, threshold = 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger only once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    switch (animation) {
      case "fade-in-up":
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        };
      case "fade-in-left":
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-40px)",
          transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        };
      case "fade-in-right":
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(40px)",
          transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        };
      case "fade-in":
      default:
        return {
          opacity: isVisible ? 1 : 0,
          transition: `opacity 0.6s ease ${delay}ms`,
        };
    }
  };

  return (
    <div ref={ref} style={getAnimationStyles()}>
      {children}
    </div>
  );
}
