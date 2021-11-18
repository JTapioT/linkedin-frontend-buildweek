import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";
import { useParams, useHistory } from "react-router-dom";

class AddPost extends React.Component {
  // { userId } = useParams(this.props);

  state = {
    image: null,
    body: {
      text: "",
    },
  };

  FetchPostDetails = async () => {
    try {
      let response = await fetch(
        "https://linkedin-buildweek.herokuapp.com/posts"
        /* {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZGRhMGMxODE5NjAwMTU0ZjI5OTgiLCJpYXQiOjE2MzcxNDYwMTYsImV4cCI6MTYzODM1NTYxNn0.GNoplRQQVFS4xepzQsDn2xo1i3p7V3rZ4f5ayPPyv3I",
          },
        } */
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
        `https://linkedin-buildweek.herokuapp.com/posts/` +
          process.env.REACT_APP_USER,
        {
          method: "POST",
          body: JSON.stringify(this.state.body),
          headers: {
            "Content-Type": "application/json",
          },
          //   body: JSON.stringify({ text: formData }),
        }
      );

      if (response.ok) {
        alert("posted");
        const postData = await response.json();
        console.log(postData);

        console.log("here my new data", formData.getAll("post"));
        if (formData.getAll("post")) {
          const imageUpload = await fetch(
            `https://linkedin-buildweek.herokuapp.com/posts/${postData._id}/uploadPic`,
            /*  `https://striveschool-api.herokuapp.com/api/posts/${postData._id}`, */
            {
              body: formData,
              method: "POST",
              /* headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4MTFkNTZmMGM3MTAwMTUwZWE2YmUiLCJpYXQiOjE2MzQyMTAyNjEsImV4cCI6MTYzNTQxOTg2MX0.kpbIrgfWZiaf6lYYxY0jpxTc7d9vdqW4BhDRcKqJwE0",
            }, */
              //   body: JSON.stringify({ text: formData }),
            }
          );
        } else {
          console.log("No formData available");
        }
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
                value={this.state.body.text}
                onChange={this.handleChange}
              />
              {/* <Button variant="outline-primary" >
                Add Hashtag
              </Button> */}
              <input
                type="file"
                onChange={(e) =>
                  this.setState({ ...this.state, image: e.target.files[0] })
                }
                accept="image/png, image/jpeg"
              />
            </Form.Group>
            {/* <Button variant="outline-primary">Hashtag</Button> */}
            <div className="row-of-icons">
              <div className="icon-text-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#6BB2F9"
                  class="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                </svg>
              </div>

              <div className="icon-text-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#7FC15E"
                  class="bi bi-play-btn-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
              </div>

              <div className="icon-text-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#E6A038"
                  class="bi bi-calendar-date"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </div>

              <div className="icon-text-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FC8E91"
                  class="bi bi-file-earmark-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
                </svg>
              </div>

              <div className="icon-text-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
              </div>

              <div className="icon-text-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bar-chart-line-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
                </svg>
              </div>

              <div className="icon-text-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>

              <Button
                variant="primary"
                type="submit"
                className="btn-primary rounded-pill"
                style={{ width: "70px" }}
              >
                Post
              </Button>
            </div>
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
