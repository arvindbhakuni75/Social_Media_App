import React from 'react';
import LogoSearch from '../../../components/logoSearch/LogoSearch';
import InfoCard from './InfoCard';
import Followers from "../../../components/followers/Followers";

const ProfileLeft = () => {
  return (
    <div className="profileSide">
        <LogoSearch />
        <InfoCard />
        <Followers />
    </div>
  )
}

export default ProfileLeft
