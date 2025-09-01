import React, { useState, useEffect, useRef } from 'react';

const PopupWindow = ({ 
  title = "Untitled Window", 
  children, 
  onClose, 
  initialPosition = { x: 100, y: 100 },
  zIndex = 1000,
  isActive = false,
  onFocus
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls') || e.target.closest('.popup-content')) {
      return;
    }
    
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    if (onFocus) {
      onFocus();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 200;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const handleWindowClick = () => {
    if (onFocus) {
      onFocus();
    }
  };

  return (
    <div 
      ref={windowRef}
      className={`popup-window ${isActive ? 'active' : ''}`}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: zIndex,
        cursor: isDragging ? 'grabbing' : 'default'
      }}
      onMouseDown={handleMouseDown}
      onClick={handleWindowClick}
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
        {children}
      </div>
    </div>
  );
};

export default PopupWindow;
