import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {fireFightingData} from './data'


const ImgSlider = () => {
  return (
    <div id="Firefighting"
  
    className="carousel-wrapper" key={fireFightingData.id}>
      <div 
     
      className="slider-heading">
      <h1 className="heading"> Firefighting</h1>
      <hr className='line' />
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