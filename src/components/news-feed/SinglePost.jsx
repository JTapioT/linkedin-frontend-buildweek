import DeletePost from "./DeletePost";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Comment from "./Comment";

class SinglePost extends React.Component {
  state = {
    show: false,
    showComment: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <div className="brdr-linkedin-posts mb-3 ml-2">
          <div className="posts-info-top">
            <div className="text-posts">
              <img
                src={this.props.post.user.image}
                style={{ borderRadius: "50%" }}
                width="50"
                height="50"
                className="d-inline-block align-top special-img"
                alt="React Bootstrap logo"
              />
              <div className="d-flex">
                <div>
                  <h5 className="mb-1">{this.props.post.user.surname}</h5>
                  <small className="text-mute">2,346 followers</small>
                </div>

                {/* DELETION */}
                <span
                  style={{ position: "absolute", right: "45px" }}
                  onClick={() => {
                    this.showModal();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="grey"
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </span>
              </div>
            </div>
            <p>{this.props.post.text}</p>
          </div>

          <img
            src={this.props.post.image}
            style={{
              width: "100%",
              borderBottomLeftRadius: "18px",
              borderBottomRightRadius: "18px",
            }}
          ></img>
          <Row style={{ paddingLeft: "10px", paddingTop: "2px" }}>
            <Col className="px-0 ">
              <b>
                <button className="btn btn-primary actuall-feed-h5">
                  <i className="bi text-muted bi-hand-thumbs-up"></i>&nbsp;{" "}
                  <span className="text-muted">Like</span>
                </button>{" "}
              </b>
            </Col>
            <Col className="px-0 ">
              <b>
                <button className="btn btn-primary actuall-feed-h5">
                  <i className="bi text-muted bi-chat-right-text"></i>&nbsp;{" "}
                  <span
                    className="text-muted"
                    onClick={() =>
                      this.setState({ ...this.state, showComment: true })
                    }
                  >
                    Comment
                  </span>
                </button>{" "}
              </b>
            </Col>
            <Col className="px-0 ">
              <b>
                <button className="btn btn-primary actuall-feed-h5">
                  <i className="bi text-muted bi-arrow-90deg-right"></i>
                  &nbsp; <span className="text-muted">Share</span>
                </button>{" "}
              </b>
            </Col>
            <Col className="px-0  ">
              <b>
                <button className="btn btn-primary actuall-feed-h5">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/paper-plane.png"
                    width="22"
                  />
                  &nbsp; <span className="text-muted">Send</span>
                </button>{" "}
              </b>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.showComment && (
                <Comment postId={this.props.post._id} />
              )}
            </Col>
          </Row>
        </div>
        <DeletePost
          show={this.state.show}
          postInfo={this.props.post}
          handleClose={this.hideModal}
          history={this.props.history}
        />
      </>
    );
  }
}

export default SinglePost;
