import React, { useState, useRef, useEffect } from 'react';
import './PopupWindow.css';
import './PopupWindow.css';

const PopupWindow = ({ id, title, content, onClose, initialPosition = { x: 100, y: 100 } }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(100);
  
  const windowRef = useRef(null);
  
  // Handle bringing window to front when clicked
  const bringToFront = () => {
    setZIndex(prevZIndex => prevZIndex + 1);
  };
  
  // Start dragging
  const handleMouseDown = (e) => {
    if (e.target.classList.contains('popup-header')) {
      setIsDragging(true);
      
      // Calculate the offset between mouse position and window position
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      
      bringToFront();
    }
  };
  
  // Handle dragging
  const handleMouseMove = (e) => {
    if (isDragging) {
      // Calculate new position based on mouse position and offset
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };
  
  // End dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);
  
  return (
    <div 
      ref={windowRef}
      className="popup-window"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: zIndex
      }}
      onMouseDown={handleMouseDown}
      onClick={bringToFront}
    >
      <div className="popup-header">
        <div className="window-controls">
          <button className="window-control close" onClick={onClose}></button>
          <button className="window-control minimize"></button>
          <button className="window-control expand"></button>
        </div>
        <div className="popup-title">{title}</div>
        <div className="popup-header-spacer"></div>
      </div>
      <div className="popup-content">
        {content}
      </div>
    </div>
  );
};

export default PopupWindow;
