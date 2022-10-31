import React, {useState, useEffect} from "react";
import {Home, Post, AccountForm} from "./components";
import {Route, Switch, Link, useHistory} from "react-router-dom";
import { fetchPosts, fetchUser, fetchUsername } from "./api/api";

const App = () => {
    const [post, setPost] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem("token")||"");
    const [username, setUsername] = useState(null);
    const history = useHistory();

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
    }, []);


    useEffect(() => {
        if (token) {
            const getUsername = async () => {
                const { username } = await fetchUsername(token);
                console.log("username", username)
                setUsername(username)
            }
            getUsername();
        }
    }, [token])


    useEffect(() => {
        window.localStorage.setItem("token", token)
    }, [token]);

    const logOut = () => {
        setToken("")
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
        <Route path="/Post">
            <Post posts={post}/>
        </Route>
        <Route path="/Account/:action">
            <AccountForm setToken={setToken}/>
        </Route>
        </Switch>
        </div>
    );
};

export default App;