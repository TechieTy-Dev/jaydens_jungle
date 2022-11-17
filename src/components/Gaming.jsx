import React, {useEffect} from 'react'
import { gamingData } from './data';
import {motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'


/* Card Function that renders json data into an html card */
const GamingCard = () => {
  return(
      <div className='gaming-card'>
           {gamingData &&
        gamingData.map((gamingData) => {
          return (
            <div className="gaming-card-box" key={gamingData.id}>
              <div className="gaming-card-content">
              <h1 className="gaming-card-heading">{gamingData.title}</h1>
              <p className="gaming-card-content">{gamingData.content}</p>
              </div>
              <img src={gamingData.image} alt="thumbnail for the video" className='gaming-card-img' />
             
            </div>
          );
        })}
      </div>
  )
};

/* Component that holds all functions and components that will be exported to APP.JS to be rendered on website */

const Gaming = () => {
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
      animation.start({ x: '-100vw'})
    }
   }, [inView, animation]);
  return (
    <div id="Gaming" className="section">
    <div ref={ref} className="heading-box">
      <motion.h1 animate={animation} className="heading"> Gaming</motion.h1>
      <motion.hr className="line" animate={animation} />
    </div>
    <GamingCard />
  </div>
  )
}
export default Gaming

