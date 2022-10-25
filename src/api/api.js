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