import React from 'react';
import "./RightSide.css";
import { HomeIcon, NotificationIcon, comment } from '../../img';
import { FiSettings } from "react-icons/fi";
import TrandCard from './TrandCard';
import ShareModal from '../shareModal/ShareModal';

const RightSide = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className='rightSide'>
        <div className="navIcons">
          <img src={HomeIcon} alt="HomeIcon" />
          <FiSettings style={{fontSize : "22px"}} />
          <img src={NotificationIcon} alt="HomeIcon" />
          <img src={comment} alt="HomeIcon" />
        </div>

        <TrandCard />

        <button className="button r-button" onClick={() =>setIsModalOpen(true)}>
          Share 
          <ShareModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </button>

    </div>
  )
}

export default RightSide
