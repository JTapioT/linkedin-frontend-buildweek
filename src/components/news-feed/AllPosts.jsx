import React from "react";
import DeletePost from "./DeletePost";
import SinglePost from "./SinglePost";

class AllPosts extends React.Component {
  state = {
    posts: [],
    show: false,
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://linkedin-buildweek.herokuapp.com/posts"
        /* {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZGRhMGMxODE5NjAwMTU0ZjI5OTgiLCJpYXQiOjE2MzcxNDYwMTYsImV4cCI6MTYzODM1NTYxNn0.GNoplRQQVFS4xepzQsDn2xo1i3p7V3rZ4f5ayPPyv3I",
          },
        } */
      );
      let responseJson = await response.json();
      // displays all posts
      console.log(responseJson);

      // receive only the first 10
      if (response.ok) {
        const allPosts = responseJson.posts
          .map((eachPost, index) => {
            if (index < 3) {
              return eachPost;
            }
          })
          .filter(Boolean);
        const ourPosts = responseJson.posts.filter(
          (post) => post.username === "striveschool"
        );
        const posts = [...allPosts, ...ourPosts];
        console.log(posts);

        // put these into state
        this.setState({ posts: posts });
        console.log("posts -" + posts);
        console.log("state -" + this.state.posts);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        {/*  pass the state into components */}
        {this.state.posts.length
          ? this.state.posts.map((post) => {
              return <SinglePost post={post} history={this.props.history} />;
            })
          : null}
      </>
    );
  }
}

export default AllPosts;
