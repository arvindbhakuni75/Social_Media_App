import React from "react";
import "./ProfileCard.css";
import CoverImg from "../../img/cover.jpg";
import ProfileImg from "../../img/profileImg.jpg";

const ProfileCard = () => {
  const profilePage = true;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={CoverImg} alt="" />
        <img src={ProfileImg} alt="" />
      </div>
      <div className="profileName">
        <span>Jon Dow</span>
        <span>React Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Following</span>
          </div>

          <div className="vl" />

          <div className="follow">
            <span>100</span>
            <span>Followers</span>
          </div>

          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {profilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
