import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const PostItem = ({ item }) => {
    console.log(item, "im in items");
    return (
    <div className = "ui card">
        <div className="content">
            <div className="left floated aligned tiny header">{item.title}</div>
            {item.isAuthor ?
            <div className="right floated aligned tiny header">Mine</div>
        : null}
        <div className="centered aligned description">
            <p>{item.description}</p>
            <div className="extra content">
                <div className="centered aligned header">
                    <Link to="">View Price</Link>
                </div>
            </div>
        </div>
        <div className="messages section">
          { item.messages.map((message) => {
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