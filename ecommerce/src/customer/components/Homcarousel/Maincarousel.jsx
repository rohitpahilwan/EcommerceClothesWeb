import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';


const Maincarousel = () => {
  
  const items = MainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation'  src={item.image} alt=''/>)
  return(
  <AliceCarousel
  items={items}
  />
)} 

export default Maincarousel;