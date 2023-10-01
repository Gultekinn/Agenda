import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-arh9T1PRXHA7Hwvvy1iBNaKtQLfbdm2eSr5wjdyn1WAxcYVugR9X74G3pFrM6QIKRs&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUnXDiQpea51wP1VE8tlzkYK6qqux7xfaFJP1WnRo5ve-E7rum8moZ93AOHqJpILjqkM&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BDSdIzfe-TSDixFEILiusBAsrpv45hfFxHB2lgPBJMM1cSjha9ySdy2AKt-tZGj6BOc&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZbf7Hh1m2LQc5uSSceQ7ksOzi0bd06g8XlhOLF5JcU5JZNw4NdNMbxJmTsyC87iabFA&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpov95yf0g22ApehYtB_7i3ZHJCvlALNuFjr2l7kRdkgbPoEMPV5ya3xBFWLz5DT3RJN4&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4-RelAAWXKT5YS_-6uXW-KGq3qKjnvCyptQIpTvxk1JclGLXRhUzHNN5S7LfZ-uNjTY&usqp=CAU'
    // You can add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change the duration (in milliseconds) between each slide here
    
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <> <h1>Find The Best Product
from Our Shop</h1> 
<p>Designers who are interesten creating state ofthe.

</p>
     <div className="slider">
     
      <div className="carousel">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index}`}
            className={index === currentIndex ? 'slide active' : 'slide'}
          />
        ))}
      </div>
    </div>
    </>
  
  );
};

export default Slider;
