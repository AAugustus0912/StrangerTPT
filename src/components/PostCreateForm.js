 import React from "react";
 import { createPost } from "../api/api";

const PostCreateForm = (token, setPost) => {

return (<form className="ui form">
<h3>Create Post!</h3>
<label htmlFor="description">Description</label>
<input type="text" placeholder="A description of Vacation Spot" required></input>
<div>
    
</div>
</form>)
};

 export default PostCreateForm;