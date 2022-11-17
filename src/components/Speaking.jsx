import React,{useEffect} from 'react'
//Import data from json file
import { speakingData } from './data';
import {motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'

/* Card Function that renders json data into an html card */
const SpeakingCard = () => {
  return(
      <div className='grid-card'>
           {speakingData &&
        speakingData.map((speakingData) => {
          return (
            <div className="grid-card-box" key={speakingData.id}>
              <h1 className="card-heading">{speakingData.title}</h1>
              <p className="card-content">{speakingData.content}</p>
              <img src={speakingData.image} alt="thumbnail for the video" className='card-img' />
             
            </div>
          );
        })}
      </div>
  )
};

/* Component that holds all functions and components that will be exported to APP.JS to be rendered on website */

const Speaking = () => {
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
    <div id="Speaking" className="section">
    <div  ref={ref} className="right-heading-box">
      <motion.h1  animate={animation} className="right-heading"> Speaking</motion.h1>
      <motion.hr animate={animation}  className="right-line" />
    </div>
    <SpeakingCard />
  </div>
  )
}

export default Speaking