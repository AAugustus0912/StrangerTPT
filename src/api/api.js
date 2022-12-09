 const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FT-ET-WEB-PT/"

 const makeHeaders = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

 export const fetchPosts = async (token) => {
     try {
     const response = await fetch(`${BASEURL}/posts`, {
     headers: {
      Authorization: `Bearer ${token}`,
     }
    });
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
      console.log("response for registering user", response);
      const data = await response.json();
      console.log("data", data)
      return data;
    } catch (error) {
        console.error("error registering user", error)
    }
}

export const loginUser = async (username, password) => {
  try {
      const response = await fetch (`${BASEURL}/users/login`, {
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
    console.log("response for registering user", response);
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
            console.log("user response body", response);
            const { data } = await response.json();
            console.log("user data", data)
            return data;
        } catch(error) {
            console.log("error fetching username",error)
        }
    }

export const createPost = async (token, title, description, price) => {
  
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
                //willDeliver
              }
            })
          });
          console.log("create post response body", response);
             const { data } = await response.json();
             console.log("create post data", data)
             return data;
            
        } catch(error) {
            console.log("error fetching create post", error)
        }
    }

    export const deletePost = async (token, postId) => {
      try {
        await fetch(`${BASEURL}/posts/${postId}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
  },

});
      } catch(error) {
      console.error("DELETE /Post/postId failed:", error);
        }
      };
    

      export const addComment = async (token, postId, comment) => {
        try {
          const { success, error, data } = await callAPI(`/Post/${postId}/comments`, {
            token: token,
            method: "POST",
            body: {
              comment: {
                content: comment
              },
            },
          });
      
          if (success) {
            return {
              success: success,
              error: null,
              comment: data.comment,
            };
          } else {
            return {
              success: success,
              error: error.message,
              comment: null,
            };
          }
        } catch (error) {
          console.error(`POST /Post/${postId}/comments failed:`, error);
      
          return {
            success: false,
            error: "Failed to create comment for the post",
            comment: null,
          };
        }
      };
      