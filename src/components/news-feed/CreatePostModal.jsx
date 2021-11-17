import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const PostModal = ({ handleClose, show, children, props }) => {
  const showHideClassName = show
    ? "create-post-modal display-block"
    : "create-post-modal display-none";
  const [user, setUser] = useState({});

  const { userId } = useParams(props);
  console.log(userId);
  const fetchUser = async () => {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/profile/${userId}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={showHideClassName}>
      <section className="create-post-modal-main">
        {children}

        {/*  CLOSE BUTTON AND TEXT  */}
        <div className="d-flex justify-content-between">
          <h5>Create a Post</h5>

          <button type="button" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                fill="#000"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                fill="#000"
              />
            </svg>
          </button>
        </div>

        <hr></hr>

        <div className="user-area">
          {/* img */}
          <img
            src={user.image}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            alt="React Bootstrap logo"
          />
          <div className="text-area">
            {/* name surname */}
            <h4>{`${user.name} ${user.surname}`}</h4>
            {/* button */}
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                class="rounded-pill text-secondary dropdown-toggle btn btn-outline-secondary"
              >
                Anyone
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Anyone</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Connections Only
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Anyone + Twitter
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <AddPost />
      </section>
    </div>
  );
};

export default PostModal;
