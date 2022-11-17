import React, {useEffect} from 'react'
import right from '../assets/heroicons_puzzle-piece-20-solid (1).svg'
import left from '../assets/heroicons_puzzle-piece-20-solid (2).svg'
import {motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const About = () => {

   const {ref, inView} = useInView({
    threshold: 0.3
   }
   );
   const animation = useAnimation();
   const fade = useAnimation();


// FADE IN TEXT 
useEffect(() => {
  if(inView){
    fade.start({
      opacity: 1,
      transition: {
        duration: 4
      }
    });
  }
  if(!inView){
    fade.start({
      opacity: 0
    })
  }
}, [inView, fade])
//SLIDE IN ANIMATION
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
    <section className="about-section" id="About">
      <div  
    className='about-box' ref={ref}>
        <h1 className="about-title">Who is Jayden?</h1>
        <motion.div animate={animation} className="img-box">
          <img src={left} alt="Puzzle Piece" className="puzzle-left" />
        <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80" alt="Jayden" className="aboutme"/>
        <img src={right} alt="Puzzle Piece" className="puzzle-right" />
        </motion.div>
        <motion.div 
         animate={fade}>
        <p className="about-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae alias cum debitis harum dolorum necessitatibus, illo, eius quidem, ipsa adipisci perferendis quas nobis. Voluptas officiis consectetur ut natus deleniti.</p>
        <p className="about-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae alias cum debitis harum dolorum necessitatibus, illo, eius quidem, ipsa adipisci perferendis quas nobis. Voluptas officiis consectetur ut natus deleniti.</p>
        <p className="about-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae alias cum debitis harum dolorum necessitatibus, illo, eius quidem, ipsa adipisci perferendis quas nobis. Voluptas officiis consectetur ut natus deleniti.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About