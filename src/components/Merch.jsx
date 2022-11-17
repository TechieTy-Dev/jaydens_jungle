import React, {useEffect} from 'react'
import { merchData } from './data';
import {motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'

/* Card Function that renders json data into an html card */
const MerchCard = () => {
  return(
      <div className='card'>
           {merchData &&
        merchData.map((merchData) => {
          return (
            <div className="card-box" key={merchData.id}>
              <h1 className="card-heading">{merchData.title}</h1>
              <p className="card-content">{merchData.content}</p>
              <p className="card-price">{merchData.price}</p>
              <img src={merchData.image} alt="thumbnail for the video" className='card-img' />
             
            </div>
          );
        })}
      </div>
  )
};

/* Component that holds all functions and components that will be exported to APP.JS to be rendered on website */

const Merch = () => {
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
    <div id="Merch" className="section">
    <div ref={ref} className="right-heading-box">
      <motion.h1 animate={animation} className="right-heading"> Merch</motion.h1>
      <motion.hr animate={animation}  className="right-line" />
    </div>
    <MerchCard />
  </div>
  )
}

export default Merch