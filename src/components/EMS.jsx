import React, {useEffect} from 'react'
import { emsData } from './data';
import {motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'



/* Card Function that renders json data into an html card */
const EMSCard = () => {

  return(
      <div className='card'>
           {emsData &&
        emsData.map((emsData) => {
          return (
            <div className="card-box" key={emsData.id}>
              
              <h1 className="card-heading">{emsData.title}</h1>
              <p className="card-content">{emsData.content}</p>
              <img src={emsData.image} alt="thumbnail for the video" className='card-img' />
             
            </div>
          );
        })}
      </div>
  )
};

/* Component that holds all functions and components that will be exported to APP.JS to be rendered on website */

const EMS = () => {
  
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
    <div id="EMS" className="section">
    <div ref={ref} className="heading-box">
      <motion.h1 animate={animation} className="heading"> EMS</motion.h1>
      <motion.hr animate={animation} className="long-line" />
    </div>
    <EMSCard />
  </div>
  )
}

export default EMS