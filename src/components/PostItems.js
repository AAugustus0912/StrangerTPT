import React from "react";

const PostItem = ({ item }) => {
    return (
    <div className = "ui card">
        <div className="content">
            <div>{item.title}</div>
            <div>{item.description}</div>
        </div>
        
        </div>
        ) 
}

export default PostItem;

//PostItem is actually making the posts from each item appear on page