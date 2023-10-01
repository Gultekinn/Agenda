import React, { useState, useEffect } from 'react';
import '../Hero1/Hero1.scss';

const Hero1 = () => {
  const slideContent = [
    {
      title: 'BERSHKA',
      content: '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae id ipsam incidunt optio ab illo rem doloremque reiciendis iusto soluta.',
    },
    {
      title: 'CHANEL',
      content: '     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum odio laborum magni, dolorem ducimus, suscipit dolore dolor vero earum facilis. Animi quae libero facere error velit tenetur est quaerat reiciendis ducimus debitis. Ipsam architecto fugiat quia earum sint, atque dolore illo? Officiis, quae consequuntur?',
    },
    {
      title: 'GUCCI',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id modi at eligendi perferendis sunt rerum aliquam, eum nemo quos voluptatem pariatur laborum perspiciatis corporis, harum voluptatum dicta, ullam repudiandae sequi illo.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideContent.length);
    }, 2000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="common">
      <div className="common__hero1">
        <div className="common__hero1__slider">
          <h1>{slideContent[currentSlide].title}</h1>
          <p>{slideContent[currentSlide].content}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
