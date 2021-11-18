import EditCommentModal from "./EditCommentModal";
import { Form, Row, Col, Dropdown, Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const SingleComment = (props) => {
  const [showModal, setModal] = useState(false);
  console.log("postcomment", props.postComment);

  const deleteComment = async (postComment) => {
    try {
      const response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/posts/${props.postId}/comments/${props.postComment._id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("data deleted successfully");
        props.history.push("/feed/619647f7fffa097d09ede238");
        props.history.go();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {showModal && <EditCommentModal postComment={props.postComment} />}
      <Row class>
        <Col className="col-2">
          <img
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              marginLeft: "3px",
            }}
            src={props.postComment.userId.image}
            alt=""
          />
        </Col>
        <Col className="commentUser ">
          <div>
            <div className="d-flex justify-content-between">
              <h6 style={{ paddingBottom: "0px", marginTop: "7px" }}>
                {`${props.postComment.userId.name}  ${props.postComment.userId.surname}`}{" "}
              </h6>

              <Dropdown>
                <Dropdown.Toggle
                  style={{ border: "0px!important" }}
                  variant=""
                  id="dropdown-left"
                  class="rounded-pill text-dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="grey"
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                  </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setModal(true)}>
                    edit
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() => {
                      deleteComment(props.postComment);
                    }}
                  >
                    delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <span className="text-muted" style={{ fontSize: "0.9rem" }}>
              {props.postComment.userId.title}
            </span>
          </div>
          <div>
            <p>{props.postComment.comment}</p>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default SingleComment;
