import React from 'react';
import "./Post.css";
import { comment, like, noLike, share } from "../../../img";

const Post = ({data}) => {
  return (
    <div className="post">
        <img src={data.img} alt="postImage" />

        <div className="postReact">
            <img src={ data.liked ? like : noLike} alt="like" />
            <img src={comment} alt="comment" />
            <img src={share} alt="comment" />
        </div>
        <span style={{color: "var(--gray)", fontSize : "12px"}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post
