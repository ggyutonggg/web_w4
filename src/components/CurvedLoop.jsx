'use client';
import React, { useEffect, useRef, useState } from 'react';

const CurvedLoop = ({
  marqueeText = "Welcome to React Bits ✦",
  speed = 2,
  curveAmount = 500,
  direction = "left",
  interactive = false,
  className = ""
}) => {
  const containerRef = useRef(null);

  const baseSpeed = speed;
  const animationDuration = `${20 / baseSpeed}s`;

  return (
    <div
      ref={containerRef}
      className={`curved-loop-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '60px',
        overflow: 'hidden',
        cursor: 'default'
      }}
    >
              <div
          className="curved-text"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            animationName: 'curvedLoop',
            animationDuration: animationDuration,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDirection: direction === 'right' ? 'reverse' : 'normal',
            transform: 'translateY(30px)',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#071aff',
            textAlign: 'center',
            whiteSpace: 'nowrap'
          }}
        >
        {marqueeText.split('').map((char, index) => (
          <span
            key={index}
            style={{
              position: 'absolute',
              left: `${(index / marqueeText.length) * 100}%`,
              transform: `translateX(-50%)`,
              transition: 'none',
              transformOrigin: 'center',
              display: 'inline-block',
              padding: '0 2px'
            }}
          >
            {char}
          </span>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes curvedLoop {
          0% {
            transform: translateY(30px) translateX(-100%);
          }
          100% {
            transform: translateY(30px) translateX(100%);
          }
        }
        
        .curved-loop-container:hover .curved-text {
          animation-play-state: running;
        }
      `}</style>
    </div>
  );
};

export default CurvedLoop; 