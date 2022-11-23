import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
// import { deletePost } from "../api/api";

const PostItem = ({ item, headerElement, children }) => {
    console.log(item, "im in items");

    // const handleDeleteClick = async (postId) => {
    //     await deletePost(token, postId);
    //     setPost((prevPosts) =>
    //     prevPosts.filter((item) => item.id !== postId)
    //     );
    //};

    return (
    <div className = "ui card">
        <div className="content">
            <div className="left floated aligned tiny header">{item.title}</div>
            {headerElement}
            {/* {item.isAuthor ?
            <div className="right floated aligned tiny header">Mine</div>
        : null}  */}
        <div className="centered aligned description">
            <p>{item.description}</p>
            <div className="extra content">
                <div className="centered aligned header">
                    <Link to="">View Price</Link>
                </div>
            </div>
        </div>
        <div role="list"
        className="ui divided relaxed list"
        style={{ color: "#444" }}
        >
            {children}
            {/* {item.isAuthor && token ? (
                <button
                onClick={() => handleDeleteClick(item.id)}
                className="negative ui button left floated"
                >
                Delete
                </button>
            ) : null} */}
          { item.messages.map((message) => {
            console.log('message', message)
            return (<div role="listitem" className="item">
              <b>{message.fromUser.username}</b>
              <p className="content">{message.content}</p>
            </div>); 
          })}  
        </div>
        </div>
    </div>
    ); 
};

export default PostItem;

//PostItem is actually making the posts from each item appear on page