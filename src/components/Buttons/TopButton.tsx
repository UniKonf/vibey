"use client"

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
// import './TopButton.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button className="scrollToTopButton" onClick={scrollToTop}>
          <FaArrowUp className="scrollToTopIcon" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;