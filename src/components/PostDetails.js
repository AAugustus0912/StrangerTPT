import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../api/api";
import PostItem from "./PostItems";


const PostDetails = (props) => {
    const {token, post, getPost} = props;
    const { postId } = useParams();
    const [commentText, setCommentText] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const singlePost = post.find((onePost) => {
        const foundPost = onePost.id == postId;
        return foundPost;
    });
    
    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const { success, error, comment } = await addComment(token, postId, commentText)

        if (success) {
            setCommentText;
            console.log("added a comment successfully");

            await getPost();
        } else {
            setErrorMessage(error);
            console.log('did NOT add comment successfully');
        }
        
    };

    if (!singlePost) {
        return <p>Loading...</p>;
    }

    return (<>
        <PostItem item={singlePost}/>
        <form className="comment-form" onSubmit={handleOnSubmit}>
            <input type="text" placeholder="New Comment"
            value={commentText}
            onChange={(event) =>{
                setCommentText(event.target.value);
            }}/>
            <button type="submit"> Send </button>
            {errorMessage ? <p>Failed: {errorMessage}</p>
           : null }
            </form>
   </>)
};

export default PostDetails;