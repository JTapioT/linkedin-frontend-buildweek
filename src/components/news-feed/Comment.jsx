import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";

const Comment = (props) => {
  const [comment, setComment] = useState([]);
  const [commentText, setCommentText] = useState("");

  const getAllComments = async () => {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/posts/${props.postId}/comments`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setComment(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postComment = async () => {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/posts/${props.postId}/comments`,
        {
          method: "POST",
          body: JSON.stringify({ comment: commentText, userId: props.userId }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("comment successfully posted", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment();
  };

  return (
    <>
      <div className=" d-flex  mt-3 mb-3 align-items-baseline">
        <div>
          <img
            style={{
              marginLeft: "3px",
              borderRadius: "50%",
              marginRight: "2px",
              width: "40px",
              height: "40px",
            }}
            src={props.image}
            alt=""
          />
        </div>
        <Form className="w-100 ml-1" onSubmit={handleSubmit}>
          <Form.Group className="w-100 mx-0 d-flex">
            <Form.Control
              size="sm"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              type="text"
              placeholder="write a comment"
            />
            <Button
              style={{
                borderRadius: "50%",
                height: "35px",
                marginLeft: "4px",
                marginRight: "4px",
              }}
              variant="success"
              type="submit"
            >
              Post
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div>
        {comment.map((post) => (
          <Row class>
            <Col className="col-2">
              <img
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  marginLeft: "3px",
                }}
                src={post.userId.image}
                alt=""
              />
            </Col>
            <Col className="commentUser ">
              <div>
                <h6 style={{ paddingBottom: "0px", marginTop: "7px" }}>
                  {`${post.userId.name}  ${post.userId.surname}`}{" "}
                </h6>
                <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {post.userId.title}
                </span>
              </div>
              <div>
                <p>{post.comment}</p>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
};

export default Comment;
