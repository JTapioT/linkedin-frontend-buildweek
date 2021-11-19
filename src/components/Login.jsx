import React, { Component } from "react";
import "./login.css"
import {
  Container,
  FormControl,
  Button,
  FormGroup,
  Image,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

import { FiUpload } from "react-icons/fi";
import { GrFacebook, GrLinkedin } from "react-icons/gr";

class Login extends Component {
  render() {
    return (
      <Container id="logingPage" className="d-flex justify-content-center ">
        <div className="Login">
          <Image
            className="mb-3"
            src="https://cdn.worldvectorlogo.com/logos/linkedin.svg"
          />
          <form onSubmit="">
            <FormGroup controlId="name">
              <label>Email</label>
              <FormControl autoFocus type="name" value="" />
            </FormGroup>
            <FormGroup controlId="password">
              <label>Password</label>
              <FormControl value="" type="password" />
            </FormGroup>
            <Button block type="submit">
              Login
            </Button>
            <div className="logins">
              <a>
                <div className="LoginButtons">
                  <GrFacebook className="mr-2" /> Facebook
                </div>
              </a>
              <a>
                <div className="LoginButtons">
                  <GrLinkedin className="mr-2" /> Linkedin
                </div>
              </a>
            </div>
            <br />

            <div className="d-flex justify-content-center mt-2">
              <Button id="">Create an account</Button>
            </div>

            <>
              <div className="mt-5">
                <div className="d-flex justify-content-center">
                  <Button variant="info">Create a new User</Button>
                </div>
              </div>
            </>
          </form>
        </div>

        <>
          <div className="Login">
            <Image
              className="mb-3"
              src="https://cdn.worldvectorlogo.com/logos/linkedin.svg"
            />
            <form>
              <FormGroup>
                <label>Username</label>
                <FormControl autoFocus id="username" type="text" value="" />
              </FormGroup>
              <FormGroup>
                <label>Email</label>
                <FormControl value="" type="text" id="email" />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <FormControl value="" type="password" id="password" />
              </FormGroup>
              <Button block>Sign Up</Button>
            </form>
          </div>

          <div style={{ marginTop: "35vh" }}>
            <Container className="d-flex justify-content-center">
              <Row>
                <Col className="d-flex align-items-center mr-5">
                  <label htmlFor="profilePhoto">
                    <FiUpload style={{ fontSize: "55px", color: "#0073B1" }} />
                  </label>
                </Col>
                <form>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="profilePhoto"
                    profile="file"
                    accept="image/*"
                  />
                  <Container>
                    <Image
                      src="https://cdn.worldvectorlogo.com/logos/linkedin.svg"
                      className="mb-3"
                      style={{ width: "150px" }}
                    />
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Name</label>
                          <FormControl
                            autoFocus
                            id="name"
                            type="text"
                            value=""
                          />
                        </FormGroup>
                        <FormGroup>
                          <label>Surname</label>
                          <FormControl
                            autoFocus
                            id="surname"
                            type="text"
                            value=""
                          />
                        </FormGroup>
                        <FormGroup>
                          <label>About You</label>
                          <FormControl
                            autoFocus
                            id="about"
                            type="text"
                            value=""
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <label>Bio</label>
                          <FormControl
                            autoFocus
                            id="bio"
                            type="text"
                            value=""
                          />
                        </FormGroup>
                        <FormGroup>
                          <label>Title</label>
                          <FormControl
                            autoFocus
                            id="title"
                            type="text"
                            value=""
                          />
                        </FormGroup>
                        <FormGroup>
                          <label>Area</label>
                          <FormControl
                            autoFocus
                            id="area"
                            type="text"
                            value=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button block type="submit">
                      Add Info
                    </Button>
                  </Container>
                </form>
              </Row>
            </Container>
          </div>
        </>
      </Container>
    );
  }
}

export default Login;
