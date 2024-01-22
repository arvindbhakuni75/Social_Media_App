import React from 'react';
import "./Followers.css";
import { followers } from '../../data/FollowersData';

const Followers = () => {
  return (
    <div className='followersCard'>
      <h3>Who is following you</h3>
      {
        followers?.map((followers, id) => (
            <div key={id} className="followers">
                <div>
                    <img src={followers.img} alt="follower'sImage" className='followerImg' />
                    <div className="name">
                        <span>{followers.name}</span>
                        <span>@{followers.userName }</span>
                    </div>
                </div>
                <button className='button fc-button'>Follow</button>
            </div>
        ))
      }
    </div>
  )
}

export default Followers
