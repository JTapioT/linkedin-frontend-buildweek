import { Container, Row, Col } from "react-bootstrap";
import Experience from "./experience/Experience";
import Education from "./Education";
import SkillsEndorsements from "./SkillsEndorsements";
import About from "./About";
import UserInfoJumbotron from "./UserInfoJumbotron";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

import CreatePost from "./news-feed/CreatePost";
import AllPosts from './news-feed/AllPosts'


function Layout(props) {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={9}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                <UserInfoJumbotron id={props.match.params.id} />
                <Experience
                  id={props.match.params.id}
                  history={props.history}
                />
                <Education />
                <SkillsEndorsements />
                <About />{" "}
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                <PeopleYouMayKnow history={props.history} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
