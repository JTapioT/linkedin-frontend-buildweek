import React from "react";
import { Card, Row, Col, Nav, Button } from "react-bootstrap";

import EditProfile from "./EditProfile";
import { useState, useEffect } from "react";

const UserInfoJumbotron = (props) => {
  const [userId, setUserId] = useState(props.id);
  const [user, setUser] = useState({});

  async function getData() {
    const response = await fetch(
      `https://linkedin-buildweek.herokuapp.com/profile/${
        userId === "me" ? process.env.REACT_APP_USER : userId
      }`
      /*{
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZGRhMGMxODE5NjAwMTU0ZjI5OTgiLCJpYXQiOjE2MzcxNDYwMTYsImV4cCI6MTYzODM1NTYxNn0.GNoplRQQVFS4xepzQsDn2xo1i3p7V3rZ4f5ayPPyv3I",
        },
      }*/
    );
    const userProfile = await response.json();

    setUser(userProfile);
    console.log(user);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    user && (
      <div>
        <Card style={{ borderRadius: "18px" }}>
          <img
            src={user.image}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "80px",
              top: 120,
              left: 10,
              position: "absolute",
            }}
            alt="React Bootstrap logo"
          />
          <Card.Img
            variant="top"
            style={{
              width: "auto",
              height: "225px",
              backgroundColor: "blue",
              borderTopLeftRadius: "18px",
              borderTopRightRadius: "18px",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOGKW05-ex-bsvBF4tMDEX7WuI5Z6Wr-RJw&usqp=CAU"
          />

          <Row>
            <Col md={8}></Col>{" "}
            <Col md={4}>
              <EditProfile id={userId} />
            </Col>
          </Row>
          <Card.Body>
            <Card.Text>
              <Row>
                <Col md={8}>
                  <b>
                    <h3 style={{ fontWeight: "600" }} className="mb-0">
                      {user.name} {user.surname}
                    </h3>
                  </b>
                  <h5 style={{ fontSize: "medium" }} className="mb-1">
                    {user.title}
                  </h5>
                  <h5
                    style={{ fontSize: "medium", color: "grey" }}
                    className="mb-0"
                  >
                    {user.bio}
                  </h5>

                  <Nav>
                    <Nav.Item>
                      <Nav.Link
                        style={{ fontSize: "14px" }}
                        className="d-inline text-secondary pl-0 pr-0"
                      >
                        Contact Info -
                      </Nav.Link>
                      <p
                        className="d-inline text-secondary"
                        style={{ fontSize: "14px" }}
                      >
                        {user.email}
                      </p>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={4}>
                  <i
                    className="bi bi-house-door-fill"
                    style={{ fontSize: "24px" }}
                  ></i>
                  <small>School</small>

                  <p>{user.area} </p>
                </Col>
              </Row>
              <Row>
                <Nav>
                  <Nav.Item>
                    <Nav.Link className="text-primary">22 Connections</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>

              <Row style={{ marginLeft: "-25px" }}>
                <Button
                  className="btn-primary"
                  style={{ borderRadius: "20px", marginLeft: "20px" }}
                  href=""
                >
                  Open To
                </Button>
                <Button
                  className="default-btn-style"
                  style={{ marginLeft: "5px" }}
                  variant="outline-secondary"
                >
                  Add Section
                </Button>
                <Button
                  className="default-btn-style"
                  style={{ marginLeft: "5px" }}
                  variant="outline-secondary"
                  href={`https://linkedin-buildweek.herokuapp.com/profile/${userId}/PDF`}
                >
                  Profile PDF
                </Button>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  );
};
export default UserInfoJumbotron;
