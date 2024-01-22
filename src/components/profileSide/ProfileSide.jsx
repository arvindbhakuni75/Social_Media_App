import React from 'react';
import "./ProfileSide.css";
import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';
import Followers from '../followers/Followers';

const ProfileSide = () => {
  return (
    <div className='profileSide'>
      <LogoSearch />
      <ProfileCard />
      <Followers />
    </div>
  )
}

export default ProfileSide
