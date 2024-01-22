import React, { useState, useRef } from 'react';
import "./PostShare.css";
import ProfileImage from "../../../img/profileImg.jpg";
import { FaImage } from "react-icons/fa6";
import { FaPlayCircle, FaCalendarAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { LiaTimesSolid } from "react-icons/lia";

const PostShare = () => {

  const [image, setImage] = useState();
  const imageRef = useRef();

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

  return (
    <div className='postShare'>
      <img src={ProfileImage} alt="ProfileImage" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
        <div 
          className="option" 
          style={{color: "var(--photo)"}}
          onClick={() => imageRef.current.click()}
        >
            <FaImage className='shareIcons' />
            Photo
        </div>
        <div className="option" style={{color: "var(--video)"}}>
            <FaPlayCircle className='shareIcons' />
            Video
        </div>
        <div className="option" style={{color: "var(--location)"}}>
            <GrLocation className='shareIcons' />
            Location
        </div>
        <div className="option" style={{color: "var(--shedule)"}}>
            <FaCalendarAlt className='shareIcons' />
            Shedule
        </div>
        <button className='button ps-button'>Share</button>
        <div style={{display: "none"}}>
          <input type="file" name='my-image' ref={imageRef} onChange={onImageChange} />
        </div>
      </div>

      { image && (
        <div className='previewImage'>
          <LiaTimesSolid onClick={() => setImage(null)} />
          <img src={image.image} alt='' />
        </div>
      ) }

      </div>
     
    </div>
  )
}

export default PostShare
