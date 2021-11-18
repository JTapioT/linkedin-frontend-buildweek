import { Card, Col, Container, Row } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsFeedProfile = () => {
  const [myProfile, SetMyProfile] = useState([]);

  const FetchProfileDetails = async () => {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/profile/`
      );
      let data = await response.json();
      if (response.ok) {
        console.log("here", data);
        SetMyProfile(data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProfileDetails();
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <Row>
          <Col>
            <Card style={{ width: "100%" }} className="brdr-linkedin">
              <Card.Img
                variant="top"
                src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/0bb/959/ba16a05fa7b18c5f21767d2b1c.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <Link to="/profile/me">
                    <Card.Link>Welcome !</Card.Link> <br />{" "}
                    <small>Add a photo</small>
                  </Link>
                </Card.Title>
                <Card.Text>
                  connection <br /> Grow your network
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Acccess exclusive tools & insights
                </ListGroupItem>
                <ListGroupItem style={{ text: "bold" }}>
                  Try Premium for free
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>

                <Card.Link href="#">My items</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card style={{ width: "100%" }} className="brdr-linkedin">
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Card.Link href="#">Groups</Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="d-flex justify-content-between">
                      <Card.Link href="#">Events</Card.Link>
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
                    </div>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Card.Link href="#">Followed Hashtags</Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>Discover more</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NewsFeedProfile;
