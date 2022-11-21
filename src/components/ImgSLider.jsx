import React, {useEffect} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {fireFightingData} from './data'
import {motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'


const ImgSlider = () => {

  const {ref, inView} = useInView({
    threshold: 0.3
   }
   );
   const animation = useAnimation();
  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      });
    }
    if(!inView){
      animation.start({ x: '100vw'})
    }
   }, [inView, animation]);
  return (
    <div id="Firefighting"
  
    className="carousel-wrapper" key={fireFightingData.id}>
      <div 
      ref={ref}
     
      className="slider-heading">
      <motion.h1 animate={animation} className="heading"> Firefighting</motion.h1>
      <motion.hr animate={animation} className='line' />
      </div>
    <Carousel infiniteLoop autoPlay>
     
    {fireFightingData &&
      fireFightingData.map((fireFightingData) => {
        return (
          <div className="card-box" >
             
            <img src={fireFightingData.image} alt="thumbnail for the video" className='card-img' />
           
          </div>
        );
      })}
     
    </Carousel>
  </div>
  )
}

export default ImgSlider