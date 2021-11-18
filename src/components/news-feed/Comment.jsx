import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";

const Comment = (props) => {
  const [comment, setComment] = useState([]);

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
      let response = await fetch("", {
        method: "POST",
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setComment(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <>
      <div className=" d-flex mt-3 mb-3">
        <div className="user-img-resize ">{}</div>

        <Form.Group className="col-11 mx-0 d-flex">
          <Form.Control size="sm" type="text" placeholder="write a comment" />
          <Button
            style={{ borderRadius: "50%", height: "35px", marginLeft: "4px" }}
            variant="success"
            type="submit"
          >
            Post
          </Button>
        </Form.Group>
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
