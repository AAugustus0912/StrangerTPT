import React, { useEffect, useState } from "react";
import PostItem from "./PostItems";
import { Link } from "react-router-dom";
import { deletePost } from "../api/api";

import './Posts.css';

const Post = ({ posts, setPost, token }) => {
    
    console.log("post", posts);


    const handleDeleteClick = async (postId) => {
        await deletePost(token, postId);
        setPost((prevPosts) =>
        prevPosts.filter((item) => item._id !== postId)
        );
    };

    return ( 
    <>
    
    <Link to="/post/create" className="ui button">
        Create Post
        </Link>
        <div className="posts-container">
            {posts.map((item) => {
                return (
                <PostItem key={item._id} item={item} headerElement={
                     item.isAuthor ?
            <div className="right floated aligned tiny header">Mine</div>
            : null
        }>
            {item.isAuthor ? (
                <button
                onClick={() => handleDeleteClick(item._id)}
                className="negative ui button left floated"
                >
                Delete
                </button>
                     ) : null }
            
                </PostItem>
                )
            
            })} 
        </div>
            </>
    )
        }
// in order to see the posts on my screen and not just in the data im getting back in the console, i have to map thru its
export default Post;