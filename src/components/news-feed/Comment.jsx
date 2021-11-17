import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const Comment = () => {
  const [comment, setComment] = useState([]);

  const fetchComment = async () => {
    try {
      let response = fetch("", {
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

  return (
    <>
      <div className=" d-flex mt-3">
        <div className="user-img-resize ">{}</div>
        <Form.Group className="col-11 mx-0">
          <Form.Control size="sm" type="text" placeholder="write a comment" />
        </Form.Group>
      </div>
    </>
  );
};

export default Comment;
