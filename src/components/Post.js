import React from "react";
import PostItem from "./PostItems";

const Post = ({ posts }) => {
    console.log("post", posts);
    return (
        <div>
            {posts.map((item) => {
                return <PostItem key={item._id} item={item} />
            })}
            </div>
    )
}


// in order to see the posts on my screen and not just in the data im getting back in the console, i have to map thru its
export default Post;