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

export const registerUser = async (username, password) => {
    try {
        const response = await fetch (`${BASEURL}/users/register`, {
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
      });
      console.log("reponse for registering user", response);
      const data = await response.json();
      console.log("data", data)
      return data;
    } catch (error) {
        console.error("error registering user", error)
    }
}

export const fetchUsername = async (token) => {
    try {
        const response = await fetch(`${BASEURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              }
            });
            console.log("user reponse body", response);
            const { data } = await response.json();
            console.log("user data", data)
            return data;
        } catch(error) {
            console.log("error fetching username",error)
        }
    }

export const createPost = async (token, title, description, price, willDeliver) => {
    try {
        const response = await fetch(`${BASEURL}/posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              post: {
                title,
                description,
                price,
                willDeliver
              }
            })
          });
          console.log("create post response body", response);
            const { data } = await response.json();
            console.log("create post data", data)
            return data;
        } catch(error) {
            console.log("error fetching create post",error)
        }
    }