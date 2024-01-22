import React from 'react';
import "./TrandCard.css";
import { TrandData } from '../../data/TrandData';

const TrandCard = () => {
  return (
    <div className='trandCard'>
      <h3>Trands for you</h3>
      {
        TrandData?.map((trand, i) => (
            <div key={i} className="trandName">
                <span>#{trand.name}</span>
                <span>#{trand.shares}K shares</span>
            </div>
        ))
      }
    </div>
  )
}

export default TrandCard
