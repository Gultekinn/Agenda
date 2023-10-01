import React, { useEffect, useState } from 'react';
import Card from '../../../component/Site/Card/Card';
import "../Home/Home.scss";
import Slider from '../../../component/Site/Slider/Slider';
import Hero1 from '../../../component/Site/Hero1/Hero1';
import Carousel from '../../../component/Site/Carousel/Carousel';
import Hero2 from '../../../component/Site/Hero2/Hero2';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="scrollable-content">
        <Hero1/>  
        <Slider/>
        <Card/>
        <Hero2/>
        <Carousel/>
      </div>
      {showButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <KeyboardArrowUpIcon fontSize="large" />
        </button>
      )}
    </>
  );
}

export default Home;
