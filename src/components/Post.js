import React from "react";
import PostItem from "./PostItems";
import { Link } from "react-router-dom";

import './Posts.css';

const Post = ({ posts, setPost, token }) => {
    console.log("post", posts);
    return ( <>
    
    <Link to="/post/create" className="ui button">Create Post</Link>
        <div className="posts-container">
            {  posts.map((item) => {
                return <PostItem key={item._id} item={item} setPost={setPost} token={token}/> 
            }) } 
            </div>
            </>
    )
}
// in order to see the posts on my screen and not just in the data im getting back in the console, i have to map thru its
export default Post;