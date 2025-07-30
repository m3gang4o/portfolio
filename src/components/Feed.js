import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; 
import './Feed.css';
import { setInternalNavigation, isInternalNavigation } from '../utils/cookies';

const Feed = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null); 

  // Check if user should see the NYC video loading screen
  useEffect(() => {
    const hasSeenFeedPage = sessionStorage.getItem('hasSeenFeedPage');
    
    // Show loading if user hasn't been to Feed page in this session
    if (hasSeenFeedPage === 'true') {
      setLoading(false);
      setLoadingProgress(100);
      return;
    }

    let timer;
    let progressTimer;
    
    if (loading) {
      // Update loading progress
      progressTimer = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            return 100;
          }
          return prev + 1;
        });
      }, 30); // Update every 30ms for smooth animation
      
      // Set timeout for the full video duration
      timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasSeenFeedPage', 'true'); // Mark that user has seen Feed page
        setInternalNavigation(); // Mark that user is now navigating internally
      }, 3000); // 3 seconds for the NYC video to play
    }
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [loading]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };
  
  // New: Open lightbox with the clicked image
  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // New: Close lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  // Project data for the feed with size variations
  const galleryItems = [
    {
      id: 'galleryItem1',
      title: 'Blank Street Matcha!',
      image: '/media/DSC08939 2.JPG',
      category: 'yummy',
      link: '#',
      size: 'medium' 
    },
    {
      id: 'galleryItem2',
      title: 'nyc',
      image: '/media/DSC09337 2.jpg',
      category: '',
      link: '#',
      size: 'medium' 
    },
    {
      id: 'galleryItem3',
      title: 'Panda? :)',
      image: '/media/panda.JPG',
      category: '?',
      link: '#',
      size: 'small' 
    },
    {
      id: 'galleryItem4',
      title: 'BOOTS!',
      image: '/media/smile.jpg',
      category: '',
      link: '#',
      size: 'large' 
    },
    {
      id: 'galleryItem5',
      title: '',
      image: '/media/beach.jpg',
      category: '',
      link: '#',
      size: 'medium' 
    },
    {
      id: 'galleryItem6',
      title: '',
      image: '/media/jack.jpg',
      category: '',
      link: '#',
      size: 'medium' 
    },
    {
      id: 'galleryItem7',
      title: 'matcha again',
      image: '/media/matcha.jpg',
      category: '',
      link: '#',
      size: 'large' 
    },
    {
      id: 'galleryItem8',
      title: 'subway',
      image: '/media/DSC09442 2.jpg',
      category: '',
      link: '#',
      size: 'small' 
    },
    {
      id: 'galleryItem9',
      title: 'sonny angel',
      image: '/media/sonny.jpg',
      category: '',
      link: '#',
      size: 'medium' 
    },
    {
      id: 'galleryItem10',
      title: '',
      image: '/media/rachel.jpg',
      category: '',
      link: '#',
      size: 'large' 
    },
    {
      id: 'galleryItem11',
      title: 'paris!',
      image: '/media/idk.jpg',
      category: '',
      link: '#',
      size: 'small' 
    },
    {
      id: 'galleryItem12',
      title: '',
      image: '/media/bean.jpg',
      category: '',
      link: '#',
      size: 'medium' 
    },
    {
      id: 'galleryItem13',
      title: '',
      image: '/media/ian.jpg',
      category: 'westside market :)',
      link: '#',
      size: 'large' 
    }
  ];

  return (
    <div className="feed-container">
      {loading ? (
        <div className="video-loading-screen">
          <video 
            autoPlay 
            muted 
            className="loading-video"
            onEnded={() => setLoading(false)}
          >
            <source src="/videos/nyc-skyline.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="loading-overlay">
            <div className="loading-text">FEED.app</div>
          </div>
          {/* Loading bar and text */}
          <div className="loading-text">LOADING NYC...</div>
          <div className="loading-bar-container">
            <div 
              className="loading-bar" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <>
          {/* Use the same Header component as the main page */}
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="menu-item terminal-style" onClick={() => setInternalNavigation()}>$ cd /HOME</Link>
            <Link to="/feed" className="menu-item terminal-style" onClick={() => setInternalNavigation()}>$ open FEED.app</Link>
            <Link to="/about" className="menu-item terminal-style" onClick={() => setInternalNavigation()}>$ man ABOUT</Link>
          </div>

          <div className="feed-masonry-grid">
            {galleryItems.map(galleryItem => (
              <div 
                key={galleryItem.id} 
                className={`feed-item feed-item-${galleryItem.size}`}
              >
                {/* Removed the <a> tag wrapping the item if lightbox is the primary action */}
                <div className="feed-item-image-container" onClick={() => openLightbox(galleryItem.image)} style={{cursor: 'pointer'}}>
                  {galleryItem.category && (
                    <div className={`feed-item-category ${galleryItem.category.toLowerCase().replace(' ', '-')}`}>
                      {galleryItem.category}
                    </div>
                  )}
                  <img 
                    src={galleryItem.image} 
                    alt={galleryItem.title} 
                    className="feed-item-image" 
                    // onClick prop moved to parent div for larger click area, or keep here if preferred
                  />
                </div>
                <h3 className="feed-item-title">{galleryItem.title}</h3> 
              </div>
            ))}
          </div>

          {/* New: Simple Image Lightbox Modal - uses same CSS classes as before */}
          {lightboxImage && (
            <div className="simple-lightbox-overlay" onClick={closeLightbox}>
              <div className="simple-lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-lightbox-button" onClick={closeLightbox}>&times;</button>
                <img src={lightboxImage} alt="Enlarged view" className="simple-lightbox-image" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Feed;
