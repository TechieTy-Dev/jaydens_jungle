import React from 'react'
import btn from '../assets/Group 1.png'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div 
      initial={{
        opacity: 0
      }}
      animate={{opacity: 1}}
      transition={{ duration: 2}}
      className="hero-heading">
        <h2 className="hero-subtitle">Welcome to</h2>
      <h1 className="hero-title">Jayden's Jungle</h1>
      <img className='btn' src={btn} alt="discover more" />
      </motion.div>
    </section>
  )
}

export default Hero