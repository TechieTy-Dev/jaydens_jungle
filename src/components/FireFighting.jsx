import React from 'react'
//IMPORT DATA FROM JSON FILE
import { fireFightingData } from './data'; 


/* Function that maps & renders data from JSON File then create html to present data */
//id=ff1
const FireFightingCard = () => {
  return(
      <div className='card'>
           {fireFightingData &&
        fireFightingData.map((fireFightingData) => {
          return (
            <div className="card-box" key={fireFightingData.id}>
              <h1 className="card-heading">{fireFightingData.title}</h1>
              <p className="card-content">{fireFightingData.content}</p>
              <img src={fireFightingData.image} alt="thumbnail for the video" className='card-img' />
             
            </div>
          );
        })}
      </div>
  )
};


/* Nice Clean Component to render and use anywhere */
// id = ff2
const FireFighting = () => {
  return (
    <div className="section" id="Firefighting">
      <div className="heading-box">
        <h1 className="heading"> Firefighting</h1>
        <hr className="line" />
      </div>
      <FireFightingCard />
    </div>
  )
}

export default FireFighting