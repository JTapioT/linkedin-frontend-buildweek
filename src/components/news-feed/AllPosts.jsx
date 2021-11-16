import React from 'react'
import DeletePost from './DeletePost'
import SinglePost from './SinglePost'


class AllPosts extends React.Component {

  state = {
    posts: [],
    show: false
  }

   componentDidMount = async() => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk"
        }
      })
      let responseJson = await response.json()
      // displays all posts
      console.log(responseJson)

      // receive only the first 10
      if(response.ok) {
        const allPosts = responseJson.map((eachPost, index) => {
          if(index < 3) {
            return eachPost
          }
        }).filter(Boolean)
        const ourPosts = responseJson.filter((post) => post.username === "rashuHiremath")
        const posts = [...allPosts, ...ourPosts]
        console.log(posts)


      // put these into state
        this.setState({posts: posts})
        console.log("posts -"  + posts)
        console.log("state -" + this.state.posts)

      }

    } catch(e) {
      console.log(e);
    }
  }



  render() {
    return(
      <>
      {/*  pass the state into components */}
        {
          this.state.posts.length ? 
          this.state.posts.map(post => {
            return  ( 
              <SinglePost post={post} history={this.props.history}/>
            )
          }) : null
        }

      </>
    )
  }

}

export default AllPosts