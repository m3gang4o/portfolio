import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  // Sample image data - in a real app, you might fetch these from an API
  const images = [
    {
      id: 1,
      url: 'https://source.unsplash.com/random/800x600?design',
      alt: 'Design inspiration'
    },
    {
      id: 2,
      url: 'https://source.unsplash.com/random/800x600?architecture',
      alt: 'Architecture'
    },
    {
      id: 3,
      url: 'https://source.unsplash.com/random/800x600?technology',
      alt: 'Technology'
    },
    {
      id: 4,
      url: 'https://source.unsplash.com/random/800x600?minimal',
      alt: 'Minimal design'
    },
    {
      id: 5,
      url: 'https://source.unsplash.com/random/800x600?creative',
      alt: 'Creative space'
    }
  ];

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id} className="carousel-slide">
            <div className="image-wrapper">
              <img src={image.url} alt={image.alt} className="carousel-image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
