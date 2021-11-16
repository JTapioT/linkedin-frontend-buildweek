import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";

class AddPost extends React.Component {
  state = {
    image: null,
    body: {
      text: "",
    },
  };

       FetchPostDetails = async () => {

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/",
          {
            headers: {
              "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4MTFkNTZmMGM3MTAwMTUwZWE2YmUiLCJpYXQiOjE2MzQyMTAyNjEsImV4cCI6MTYzNTQxOTg2MX0.kpbIrgfWZiaf6lYYxY0jpxTc7d9vdqW4BhDRcKqJwE0",
            },
          }
        );
        let data = await response.json();
        if (response.ok) {
          console.log("here", data);
          // SetMyProfile(data.data);
        } else {
          console.log("something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };
   

  postToBeAdded = async () => {
     let formData = new FormData();
   formData.append("post", this.state.image);
    

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(this.state.body),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4MTFkNTZmMGM3MTAwMTUwZWE2YmUiLCJpYXQiOjE2MzQyMTAyNjEsImV4cCI6MTYzNTQxOTg2MX0.kpbIrgfWZiaf6lYYxY0jpxTc7d9vdqW4BhDRcKqJwE0",
          },
          //   body: JSON.stringify({ text: formData }),
        }
      );

      if (response.ok) {
        alert("posted");
        const postData = await response.json();
        console.log(postData);

        console.log("here my new data", formData.getAll("post"));

        const imageUpload = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/${postData._id}`,
          {
            body: formData,
            method: "POST",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4MTFkNTZmMGM3MTAwMTUwZWE2YmUiLCJpYXQiOjE2MzQyMTAyNjEsImV4cCI6MTYzNTQxOTg2MX0.kpbIrgfWZiaf6lYYxY0jpxTc7d9vdqW4BhDRcKqJwE0",
            },
            //   body: JSON.stringify({ text: formData }),
          }
        );
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.postToBeAdded();
  };

  handleChange = (event) => {
    this.setState({ ...this.state, body: { text: event.target.value } });
  };

  render() {
    return (
      <>
        <div className="text-area-post-modal">
          {/* <h5>Create a Post</h5> */}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={5}
                style={{ border: "none" }}
                placeholder="What do you want to talk about?"
                type="text"
                name="name"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <Button variant="outline-primary" type="submit">
                Add Hashtag
              </Button>
              <input
                type="file"
                onChange={(e) =>
                  this.setState({ ...this.state, image:e.target.files[0] })
                }
                accept="image/png, image/jpeg"
              />
            </Form.Group>
            {/* <Button variant="outline-primary">Hashtag</Button> */}
          </Form>

        </div>

        {/* <div className="App">
        {/* method="post" not needed here because `fetch` is doing the POST not the `form` */}
        {/* Also, note I changed the function name, handleSubmit */}
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData}
            onChange={handleChange}
          />
          <button type="submit">click</button>
           
        </form> */}

        {/* {data &&
          data.map((element, index) => (
           // <GameTestResult name={element.name} key={element.index} />
          ))} */}
        {/* </div> */}
      </>
    );
  }
}
export default AddPost;
