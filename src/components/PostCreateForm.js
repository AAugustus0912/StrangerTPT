 import React, { useState } from "react";
import { useHistory } from "react-router-dom";
 import { createPost } from "../api/api";

const PostCreateForm = ({token, setPost}) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
     const [description, setDescripton] = useState('');
     const [price, setPrice] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);


return (<form className="ui form" onSubmit={async (event)=> {
    event.preventDefault();
    

    const {error, post} = await createPost(token, title, description, price);

    if (post) {
        setPost((prevPosts) => [...prevPosts, post])
        setTitle('');
        setDescripton('');
        setPrice('');
        history.push('/Post');
    } else {
        setErrorMessage(error);
    }
    
    
}}>
<h3>Create A New Post!</h3>

<div className="field">
<label htmlFor="title">Title</label>
<input type="text" placeholder="The Title of Post" required autoComplete="off"
value={title}
onChange={(event) =>setTitle(event.target.value)}></input>
</div>

<div className="field">
<label htmlFor="description">Description</label>
<input type="text" placeholder="A Description of Post" required autoComplete="off"
value={description}
onChange={(event) => setDescripton(event.target.value)}></input>
</div>

<div className="field">
<label htmlFor="price">Price</label>
<input type="text" placeholder="The Price Of Post" required autoComplete="off"
value={price}
onChange={(event) => setPrice(event.target.value)}></input>
    
</div>
<button type="submit" className="ui button">Create</button>
</form>)
};

 export default PostCreateForm;