import React from 'react';
import "./InfoCard.css";
import { MdModeEdit } from "react-icons/md";
import ProfileModal from '../../../components/profileModal/ProfileModal';

const InfoCard = () => {  
    
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    
  return (
    <div className='infoCard'>
        <div className="infoHeader">
            <h4>Your Info</h4>
            <div>
                <MdModeEdit style={{fontSize: "24px", color: "orange"}} onClick={() => setIsModalOpen(true)} />
                <ProfileModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>Single</span>
        </div>

        <div className="info">
            <span>
                <b>Livs in </b>
            </span>
            <span>Noida</span>
        </div>

        <div className="info">
            <span>
                <b>worked at </b>
            </span>
            <span>SoftMind Infotech</span>
        </div>

        <button className='button logout-button'>Logout</button>

    </div>
  )
}

export default InfoCard
