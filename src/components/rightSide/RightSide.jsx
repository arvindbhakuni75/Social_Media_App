import React from 'react';
import "./RightSide.css";
import { HomeIcon, NotificationIcon, comment } from '../../img';
import { FiSettings } from "react-icons/fi";
import TrandCard from './TrandCard';

const RightSide = () => {
  return (
    <div className='rightSide'>
        <div className="navIcons">
            <img src={HomeIcon} alt="HomeIcon" />
            <FiSettings style={{fontSize : "22px"}} />
            <img src={NotificationIcon} alt="HomeIcon" />
            <img src={comment} alt="HomeIcon" />
        </div>

        <TrandCard />

        <button className="button r-button">
            Share 
        </button>

    </div>
  )
}

export default RightSide
