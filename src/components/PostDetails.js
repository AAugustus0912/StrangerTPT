import React from "react";
import { useParams } from "react-router-dom";


const PostDetails = (props) => {
    const { postId } = useParams();
    return (
        `Post Details for id=${postId}`
    )
};

export default PostDetails;