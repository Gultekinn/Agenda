import React from 'react'
import Card from '../../../component/Site/Card/Card'
import "../Home/Home.scss"
import Slider from '../../../component/Site/Slider/Slider'
import Hero1 from '../../../component/Site/Hero1/Hero1'
import Carousel from '../../../component/Site/Carousel/Carousel'
import Hero2 from '../../../component/Site/Hero2/Hero2'
const Home = () => {
  return (
    <>
    <Hero1/>  
   
    <Slider/>
    <Card/>
    <Hero2/>
 <Carousel/>

    </>
  )
}

export default Home
