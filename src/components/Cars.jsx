import React, {useEffect} from 'react'
import { carsData } from './data';
import {motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'

/* Card Function that renders json data into an html card */
const CarsCard = () => {
  const {ref, inView} = useInView({
    threshold: 0.3
   }
   );
   const delay = useAnimation();
  useEffect(() => {
    if(!inView){
      delay.start({
        opacity: 0, x: -80, y: -60,
        transition: {
          duration: 0.3, delay: 0.5 * 0.2
        }
      });
    }
    if(inView){
      delay.start({opacity: 1, x:0, y:0})
    }
   }, [inView, delay]);
  return(
      <div className='cars-card' ref={ref}>
           {carsData &&
        carsData.map((carsData, i) => {
          return (
            <motion.div 
            animate={delay}
            
            className="cards-card-box" key={carsData.id}>
              <img src={carsData.image} alt="thumbnail for the video" className='cars-card-img' />
             
            </motion.div>
          );
        })}
      </div>
  )
};

/* Component that holds all functions and components that will be exported to APP.JS to be rendered on website */

const Cars = () => {
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
    <div className="section" id="Cars">
    <div  ref={ref} className="right-heading-box">
      <motion.h1 animate={animation} className="right-heading"> Cars</motion.h1>
      <motion.hr className="right-long-line"  animate={animation}  />
    </div>
    <CarsCard />
  </div>
  )
}

export default Cars