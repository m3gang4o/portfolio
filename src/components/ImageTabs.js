import React, { useState } from 'react';

const ImageTabs = ({ images }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="image-tabs">
      <div className="tab-buttons">
        {images.map((image, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        <img 
          src={images[activeTab]} 
          alt={`Tab ${activeTab + 1}`}
          className="tab-image"
        />
      </div>
    </div>
  );
};

export default ImageTabs;
