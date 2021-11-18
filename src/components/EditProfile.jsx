import { Modal, Button, Nav, Row, Col, Form } from "react-bootstrap";
import React from "react";

class EditProfile extends React.Component {
  state = {
    show: false,
    userId: this.props.id === "me" ? "6163efdfa890cc0015cf07de" : this.props.id,
    user: {},
    isFileUploaded: false,
    fileName: null,
    file: null,
    formData: new FormData(),
    dataFetched: false,
  };

  handleClose = () => this.setState({ ...this.state, show: false });
  handleShow = () => this.setState({ ...this.state, show: true });

  uploadImage = async (formData) => {
    console.log("i am post image");
    console.log(formData);
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/profile/${this.state.userId}/picture`,
        {
          method: "POST",
          /*headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZGRhMGMxODE5NjAwMTU0ZjI5OTgiLCJpYXQiOjE2MzcxNDYwMTYsImV4cCI6MTYzODM1NTYxNn0.GNoplRQQVFS4xepzQsDn2xo1i3p7V3rZ4f5ayPPyv3I",
          }*/
          body: this.state.formData,
        }
      );

      if (response.ok) {
        let responseJSON = await response.json();
        console.log(responseJSON);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData = async () => {
    console.log("i am edit get");
    const response = await fetch(
      `https://linkedin-buildweek.herokuapp.com/profile/${this.state.userId}`
      /*,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
        },
      }*/
    );
    const userDatajson = await response.json();
    const userData = {
      name: userDatajson.name,
      surname: userDatajson.surname,
      email: userDatajson.email,
      image: userDatajson.image,
      bio: userDatajson.bio,
      title: userDatajson.title,
      area: userDatajson.area,
    };
    console.log(userData);
    this.setState({ ...this.state, user: userData, dataFetched: true });
  };

  updateData = async () => {
    console.log("i am update");
    try {
      const resp = await fetch(
        `https://linkedin-buildweek.herokuapp.com/profile/${this.state.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            //Authorization:
            //"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
          },
          body: JSON.stringify(this.state.user),
        }
      );
      if (resp.ok) {
        const userData = await resp.json();
        console.log(userData);
        this.state.user = userData;
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*componentDidMount() {
    this.getData();
  }*/

  render() {
    return (
      <>
        <Nav>
          <Nav.Item>
            <Nav.Link>
              {" "}
              <i
                className="bi bi-pencil "
                onClick={() => {
                  this.getData();
                  this.handleShow();
                }}
                style={{
                  marginTop: "10px",
                  marginLeft: "720px",
                  fontSize: "20px",
                }}
              ></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {this.state.dataFetched && (
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Intro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="g-2">
                <Col md>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.user.name}
                    onChange={(e) =>
                      this.setState({
                        ...this.state,
                        user: { ...this.state.user, name: e.target.value },
                      })
                    }
                  ></Form.Control>
                </Col>
                <Col md>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.user.surname}
                    onChange={(e) =>
                      this.setState({
                        ...this.state,
                        user: { ...this.state.user, surname: e.target.value },
                      })
                    }
                  />
                </Col>
              </Row>

              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={this.state.user.email}
                onChange={(e) =>
                  this.setState({
                    ...this.state,
                    user: { ...this.state.user, email: e.target.value },
                  })
                }
              ></Form.Control>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                //value={this.state.user.image}
                onChange={(e) =>
                  this.state.formData.append(
                    "profile",
                    e.target.files[0],
                    this.setState({
                      ...this.state,
                      user: {
                        ...this.state.user,
                        image: this.state.formData,
                        fileName: e.target.files[0].name,
                      },
                    })
                  )
                }
              ></Form.Control>

              <Row className="g-2">
                <Col md>
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.user.bio}
                    onChange={(e) =>
                      this.setState({
                        ...this.state,
                        user: { ...this.state.user, bio: e.target.value },
                      })
                    }
                  ></Form.Control>
                </Col>
                <Col md>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.user.title}
                    onChange={(e) =>
                      this.setState({
                        ...this.state,
                        user: { ...this.state.user, title: e.target.value },
                      })
                    }
                  />
                </Col>
              </Row>
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                value={this.state.user.area}
                onChange={(e) =>
                  this.setState({
                    ...this.state,
                    user: { ...this.state.user, area: e.target.value },
                  })
                }
              ></Form.Control>
              <p>Let others know how to refer to you.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={async () => {
                  this.handleClose();
                }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  this.setState({ ...this.state, isFileUploaded: true });
                  this.uploadImage(this.state.formData);
                  this.updateData();
                  this.handleClose();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

export default EditProfile;
