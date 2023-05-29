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
        <button className="fixed bottom-10 right-10 z-50 w-10 h-10 rounded-full bg-gray-700 text-white border-none outline-none cursor-pointer opacity-80 transition-opacity duration-300 flex justify-center items-center hover:opacity-100" onClick={scrollToTop}>
          <FaArrowUp className="scrollToTopIcon" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;