import React from 'react';
import "./Home.css";
import ProfileSide from '../../components/profileSide/ProfileSide';
import PostSide from '../../components/posts/PostSide';
import RightSide from '../../components/rightSide/RightSide';

const Home = () => {
  return (
    <div className='homepage'>
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  )
}

export default Home
