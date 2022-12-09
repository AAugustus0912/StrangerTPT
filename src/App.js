import React, {useState, useEffect} from "react";
import {Home, Post, PostDetails, AccountForm, PostCreateForm} from "./components";
import {Route, Switch, Link, useHistory} from "react-router-dom";
import { fetchPosts, fetchUsername } from "./api/api";


const App = () => {
    const [post, setPost] = useState([]);
    const [token, setToken] = useState(
        window.localStorage.getItem("token") || null 
        );
    const [username, setUsername] = useState(null);

    const history = useHistory();
        console.log("posts", post)
    //the useEffect dependency makes sure the data is fetched the first time vs everytime
    useEffect(() => {
        const getPosts = async () => {
           try {
               const result = await fetchPosts(token)
              setPost(result)
           } catch(error){
               console.error(error);
          }
    };
    getPosts();
    }, [token]);


    useEffect(() => {
        if (token) {
            const getUsername = async () => {
                const { username } = await fetchUsername(token);
                console.log("username", username)
                setUsername(username);
            }
            getUsername();
        }
    }, [token]);

    useEffect(() => {
        if (token) {
        window.localStorage.setItem("token", token);
    } else {
        window.localStorage.removeItem("token")
        } 
    }, [token]);

    const logOut = () => {
        setToken(null)
        setUsername(null)
        history.push("/")
    }


    return(
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Post">Post</Link>
            <div>
                { token ? (
                    <button onClick={logOut} className="item">Log Out</button>
                ): ( <>
            <Link to="/Account/login">Login</Link>
            <Link to="/Account/register">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>

        <Switch>
        <Route exact path="/">
        <Home  user={username}/>
        </Route>
        <Route path="/post/create">
            <PostCreateForm token={token} setPost={setPost} />
        </Route>
        <Route path="/post/:postId">
            <PostDetails post={post}/>
        </Route>
        <Route path="/post">
            <Post posts={post} 
            token={token} 
            setPost={setPost}/>
        </Route>
        <Route path="/account/:action">
            <AccountForm setToken={setToken}/>
        </Route>
        </Switch>
        </div>
    );
};

export default App;