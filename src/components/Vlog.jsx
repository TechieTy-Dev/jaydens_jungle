import React, {useEffect} from 'react'
import { vlogData } from './data';
import {motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'


/* Card Function that renders json data into an html card */
const VlogCard = () => {
  return(
      <div className='gaming-card'>
           {vlogData &&
        vlogData.map((vlogData) => {
          return (
            <div className="gaming-card-box" key={vlogData.id}>
              <div className="gaming-card-content">
              <h1 className="card-heading">{vlogData.title}</h1>
              <p className="gaming-card-content">{vlogData.content}</p>
              </div>
              <img src={vlogData.image} alt="thumbnail for the video" className='gaming-card-img' />
             
            </div>
          );
        })}
      </div>
  )
};

/* Component that holds all functions and components that will be exported to APP.JS to be rendered on website */

const Vlog = () => {
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
    <div id="Vlogs" className="section">
    <div ref={ref} className="heading-box">
      <motion.h1 animate={animation} className="heading"> Videos</motion.h1>
      <motion.hr animate={animation} className="line" />
    </div>
    <VlogCard />
  </div>
  )
}

export default Vlog