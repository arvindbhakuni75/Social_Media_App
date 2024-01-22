import React from 'react';
import "./Posts.css";
import { PostsData } from '../../../data/PostsData';
import Post from './Post';

const Posts = () => {
  return (
    <div className='posts'>
      {
        PostsData?.map((post, id) => (
            <Post key={id} data={post} />
        ))
      }
    </div>
  )
}

export default Posts
