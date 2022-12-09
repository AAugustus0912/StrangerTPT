import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
// import { deletePost } from "../api/api";

const PostItem = ({ item, headerElement, children }) => {
    console.log(item, "im in items");

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
                    <Link to={`/post/${item._id}`}>View Price</Link>
                </div>
            </div>
        </div>
        {children}
        <div role="list"
        className="ui divided relaxed list"
        style={{ color: "#444", clear:'both' }}
        >
          { item.messages.map((message) => {
            console.log('message', message)
            return (<div role="listitem" className="item">
              <b>{message.fromUser.username}</b>
              <p className="content">{message.content}</p>
            </div>
            ); 
          })}  
        </div>
        </div>
    </div>
    ); 
};

export default PostItem;

//PostItem is actually making the posts from each item appear on page