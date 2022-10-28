 const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FT-ET-WEB-PT/"

export const fetchPosts = async () => {
    try {
    const response = await fetch(`${BASEURL}/posts`);
    console.log("the response", response);
    const {data} = await response.json();
    console.log("This is data", data.posts);
    return data.posts;
} catch(error) {
    console.error("There's an error fetching posts")

    }
}

export const registerUser = async(username, password) => {
    try {
    const response = await fetch(`${BASEURL}/users/register`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
    })
    console.log("Response", response)
    const data = await response.json();
    console.log("data", data);
    return data;
} catch(error) {
    console.error("There was an error registering the user", error)
}
}