import React, {useState, useEffect} from "react";
import {Home, Post} from "./components";
import {Route, Switch, Link} from "react-router-dom";
import { fetchPosts } from "./api/api";

const App = () => {
    const [post, setPost] = useState([]);

    //the useEffect dependency makes sure the data is fetched the first time vs everytime
    useEffect(() => {
        const getPosts = async() => {
        try {
            const result = await fetchPosts()
            setPost(result)
        } catch(error){
            console.error(error);
        }
    };
    getPosts();
    }, [])
    return(
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Post">Post</Link>
        </nav>

        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/Post">
            <Post post={post}/>
        </Route>
        </Switch>
        </div>
    );
};

export default App;