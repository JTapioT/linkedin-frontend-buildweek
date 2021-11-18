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
          <Row>
            <Col className="col-2">
              <img
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  marginLeft: "3px",
                }}
                src="https://images.unsplash.com/photo-1637160967945-6d1ee20d67c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
            </Col>
            <Col>{post.comment}</Col>
          </Row>
        ))}
      </div>
    </>
  );
};

export default Comment;
