import React from "react";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import CreatePostModal from "./CreatePostModal";
import AddPost from "./AddPost";
class CreatePost extends Component {
  state = {
    show: false,
    userInfo: {},
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  getData = async () => {
    let response = await fetch(
      `https://linkedin-buildweek.herokuapp.com/profile/` +
        process.env.REACT_APP_USER
      /*{
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZGRhMGMxODE5NjAwMTU0ZjI5OTgiLCJpYXQiOjE2MzcxNDYwMTYsImV4cCI6MTYzODM1NTYxNn0.GNoplRQQVFS4xepzQsDn2xo1i3p7V3rZ4f5ayPPyv3I",
        },
      }*/
    );
    let userProfile = await response.json();
    console.log(userProfile);

    this.setState({ ...this.state, userInfo: userProfile });
  };

  componentDidMount = async () => {
    this.getData();
  };

  render() {
    return (
      <>
        <div
          className="brdr-linkedin mb-3"
          style={{ width: "540px", height: "120px" }}
        >
          <div className="create-post-flex">
            <div>
              <img
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
                src={this.state.userInfo.image}
                alt=""
              />
            </div>

            <Button
              variant="outline-secondary"
              className="brdr-25 text-left"
              onClick={this.showModal}
            >
              Start a Post
            </Button>
          </div>
          <div className="create-post-flex">
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
              <span>Photo</span>
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
              <span>Video</span>
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
              <span>Event</span>
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
              <span>Write Article</span>
            </div>
          </div>
        </div>

        <hr></hr>

        <CreatePostModal
          show={this.state.show}
          handleClose={this.hideModal}
          props={this.props}
        ></CreatePostModal>
      </>
    );
  }
}

export default CreatePost;
