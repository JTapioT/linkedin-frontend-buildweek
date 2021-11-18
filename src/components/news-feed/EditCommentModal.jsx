import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const EditCommentModal = ({ postComment }) => {
  const [comment, setComment] = useState(postComment.comment);
  /* const [newComment, setNewComment] = useState(""); */

  console.log("editpostcomment", postComment);
  const [showModal, setShowModal] = useState(true);

  const editComment = async () => {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/posts/${postComment.postId}/comments/${postComment._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            comment: comment,
            userId: postComment.userId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("comment successfully edited");
      } else {
        console.log("something went wrong!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={showModal} /* onHide={() => setShowModal(false)} */>
        <Modal.Dialog>
          <Modal.Body>
            <Form className="w-100 ml-1">
              <Form.Group className="w-100 mx-0 d-flex">
                <Form.Control
                  size="sm"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="write a comment"
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => editComment()}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default EditCommentModal;
