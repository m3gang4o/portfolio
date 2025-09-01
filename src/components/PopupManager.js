import React, { useState, useEffect } from 'react';
import PopupWindow from './PopupWindow';
import './PopupStyles.css';

const sampleContent = [
  {
    id: 'image1',
    title: 'ARCHIVE',
    type: 'image',
    content: (
      <div className="popup-image-container">
        <img src="/media/face.jpeg" alt="Fashion" className="popup-image" />
      </div>
    ),
    initialPosition: { x: 30, y: 160 }
  },
  {
    id: 'image2',
    title: 'DESIGN',
    type: 'image',
    content: (
      <div className="popup-image-container">
        <img src="/media/subway.jpeg" alt="Design" className="popup-image" />
      </div>
    ),
    initialPosition: { x: 1050, y: 130 }
  },
  {
    id: 'video1',
    title: 'BLUEPRINT',
    type: 'video',
    content: (
      <div className="popup-video-container">
        <video 
          controls 
          autoPlay
          muted
          loop
          className="popup-video"
          src="/media/mixkit-digital-animation-of-screens-4192-hd-ready.mp4"
        />
      </div>
    ),
    initialPosition: { x: 200, y: 480 }
  }
];

const PopupManager = ({ isMenuOpen }) => {
  const [popups, setPopups] = useState([]);

  useEffect(() => {
    const initialPopupsData = sampleContent.map(content => ({
      id: `popup-${content.id}`,
      title: content.title,
      content: content.content,
      position: content.initialPosition,
      isOpen: true
    }));
    setPopups(initialPopupsData);
  }, []);

  const closePopup = (popupId) => {
    setPopups(prevPopups =>
      prevPopups.map(p =>
        p.id === popupId ? { ...p, isOpen: false } : p
      )
    );
  };

  return (
    <div className="popup-area"> 
      {!isMenuOpen && popups.filter(p => p.isOpen).map(popup => (
        <PopupWindow
          key={popup.id}
          id={popup.id}
          title={popup.title}
          initialPosition={popup.position} 
          onClose={() => closePopup(popup.id)}
        >
          {popup.content}
        </PopupWindow>
      ))}
    </div>
  );
};

export default PopupManager;
