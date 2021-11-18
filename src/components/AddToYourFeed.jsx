import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddToYourFeed = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  async function fetchUsers() {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/posts/`
      );

      if (response.ok) {
        let responseJson = await response.json();
        console.log(responseJson);

        const users = responseJson
          .map((selectedUser, index) => {
            if (index < 3) {
              return selectedUser;
            }
          })
          .filter(Boolean);

        setSelectedUsers(users);
        console.log(selectedUsers);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <Row>
          <Col md={3}>
            <div
              className="brdr-linkedin brdr-linked-people-you-may-know mb-3"
              style={{ width: "320px", height: "auto" }}
            >
              <h5>add to your feed</h5>
              {selectedUsers.length
                ? selectedUsers.map((user) => {
                    return (
                      <div className="who-and-where mb-4">
                        <div className="d-inline">
                          <img
                            src={user.user.image}
                            className="user-img-resize"
                          />
                        </div>
                        <div className="name-company">
                          <Link
                            to={`/profile/${user._id}`}
                            className="text-dark"
                            style={{ textDecoration: "none" }}
                          >
                            <h6>{user.user.username} </h6>
                          </Link>

                          <p className="text-muted mb-1">{user.user.title}</p>

                          <div className="default-btn-style">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            Follow
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}

              <div>
                <a
                  href="#"
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  View all recomendations
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div
              className="brdr-linkedin brdr-linked-people-you-may-know"
              style={{ width: "320px", height: "auto" }}
            >
              <ListGroup>
                <ListGroup.Item>
                  <h6>Today's top courses</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  1. Unconscious Bias <br />
                  <small>Stacey Gorden</small>
                </ListGroup.Item>
                <ListGroup.Item>
                  2. Being an Effective Team Member <br />
                  <small>Daisy Lovelace</small>
                </ListGroup.Item>
                <ListGroup.Item>
                  3. Communication Foundation
                  <br />
                  <small>Brends Bailry-Hughes and tatiana Kolovou</small>
                </ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <div>
                <small>
                  Show more on LinkedIn Learning
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </small>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="ml-4" md={12}>
            <div className="mt-3 d-flex flex-column">
              <div className="d-flex justify-content-between">
                <Link style={{ color: "black" }}>
                  <small>About</small>
                </Link>
                <Link style={{ color: "black" }}>
                  <small>Accessibility</small>
                </Link>
                <Link style={{ color: "black" }}>
                  <small>Help Centre</small>
                </Link>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link style={{ color: "black" }}>
                  <small>Privacy & Terms</small>
                </Link>
                <Link style={{ color: "black" }}>
                  <small>Ad Choices</small>
                </Link>
                <Link style={{ color: "black" }}>
                  <small>Advertising</small>
                </Link>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link style={{ color: "black" }}>
                  <small>Business Services</small>
                </Link>
                <Link style={{ color: "black" }}>
                  <small>Get the LinkedIn app</small>
                </Link>
              </div>
              <Link style={{ color: "black", marginTop: ".5em" }}>
                <small>More</small>
              </Link>
            </div>

            <div>
              <ul className="list-unstyled d-flex mt-3">
                <li className="svg">
                  <figure className="display-flex">
                    <li-icon
                      type="linkedin-logo"
                      size="21dp"
                      color="brand"
                      role="img"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 84 21"
                        data-supported-dps="84x21"
                        fill="currentColor"
                        className="mercado-match"
                        width={70}
                        height={12}
                        focusable="false"
                      >
                        <g>
                          <g className="background-mercado">
                            <path d="M12.5 2.75a1.75 1.75 0 101.8 1.75 1.75 1.75 0 00-1.8-1.75zM11 8h3v10h-3zM22.34 7.76A4.06 4.06 0 0019 9.39V8h-3v10h3v-5a2.31 2.31 0 012.16-2.48c1.1 0 1.84.82 1.84 2.44V18h3v-6.25c0-3.06-1.89-3.99-3.66-3.99zM82.5 0h-18A1.5 1.5 0 0063 1.5v18a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0082.5 0zM69 18h-3V8h3zM67.5 6.25a1.75 1.75 0 111.8-1.75 1.75 1.75 0 01-1.8 1.75zM81 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.31 2.31 0 0074 13v5h-3V8h3v1.39a4.06 4.06 0 013.3-1.63c1.77 0 3.66.93 3.66 4zM3 3H0v15h9v-3H3V3zM57 9a4.23 4.23 0 00-3.17-1.3A4.9 4.9 0 0049 12.94a5 5 0 004.87 5.36 3.78 3.78 0 003.31-1.61V18H60V3h-3zm-2.54 6.8A2.57 2.57 0 0151.9 13a2.55 2.55 0 012.56-2.8A2.63 2.63 0 0157.1 13a2.6 2.6 0 01-2.64 2.8zM38.04 8H34.4l-3.34 4.04H31V3h-3v15h3v-4.81h.06L34.48 18h3.75l-4.06-5.5L38.04 8z" />
                            <path d="M43.13 7.7A5 5 0 0038 12.87a5.11 5.11 0 005.24 5.43 5.5 5.5 0 004.39-1.94l-1.93-1.3a3.28 3.28 0 01-2.4 1 2.24 2.24 0 01-2.38-2V14h7v-.77C48 9.52 45.85 7.7 43.13 7.7zm-2.2 4.3a2.16 2.16 0 012.21-2.1 2 2 0 012 2.1z" />
                          </g>
                        </g>
                      </svg>
                    </li-icon>
                    <small className="text-muted serv ">
                      Linkedin Corporation@ 2021.
                    </small>
                  </figure>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
        </Row>
      </div>
    </>
  );
};

export default AddToYourFeed;
