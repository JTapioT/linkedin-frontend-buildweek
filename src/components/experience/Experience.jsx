import { useState, useEffect } from "react";
import UserExperienceDetails from "./UserExperienceDetails";
import AddExperience from "./AddExperience";
import EditExperience from "./EditExperience";

function Experience(props) {
  const [userId, setUserId] = useState(props.id);
  const [userExperience, setUserExperience] = useState([]);
  const [isExperienceIconHover, setExperienceIconHover] = useState(false);
  const [isExperienceAddClicked, setExperienceClicked] = useState(false);
  const [isAddExperienceClosed, setAddExperienceClosed] = useState(false);
  const [isExperienceUpdated, setExperienceUpdated] = useState(false);

  const experienceIconStyle = {
    fontSize: "1.2em",
    backgroundColor: isExperienceIconHover ? "lightgrey" : null,
    borderRadius: "50%",
    padding: "0.4em 0.6em",
    cursor: isExperienceIconHover ? "pointer" : null,
    transition: "linear 0.3s",
  };

  async function fetchUserExperience() {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/profile/${process.env.REACT_APP_USER}/experiences`
      );

      if (response.ok) {
        let responseJSON = await response.json();
        console.log(responseJSON);
        setUserExperience(responseJSON.experiences);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserExperience();
  }, []);

  useEffect(() => {
    fetchUserExperience();
  }, [isAddExperienceClosed]);

  useEffect(() => {
    fetchUserExperience();
  }, [isExperienceUpdated]);


  return (
    <>
      {isExperienceAddClicked && (
        <AddExperience addExperienceClosed={setAddExperienceClosed} />
      )}
     
      <div
        className="mt-3"
        style={{
          borderTopRightRadius: "18px",
          borderTopLeftRadius: "18px",
          borderTop: "1px solid lightgrey",
          borderLeft: "1px solid lightgrey",
          borderRight: "1px solid lightgrey",
          padding: "24px",
          backgroundColor: "white",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <h5>Experience</h5>
            <a
              href={`https://linkedin-buildweek.herokuapp.com/profile/${process.env.REACT_APP_USER}/experiences/CSV`}
            >
              <i class="bi bi-arrow-down-circle ml-2"></i>
            </a>
          </div>
          <i
            className="bi bi-plus-lg"
            data-toggle="modal"
            data-target={isExperienceAddClicked ? "#addExperienceModal" : null}
            style={experienceIconStyle}
            onMouseEnter={() => {
              setExperienceIconHover(true);
            }}
            onMouseLeave={() => {
              setExperienceIconHover(false);
            }}
            onClick={() => {
              setExperienceClicked(true);
              /* props.history.push(`/profile/${userId}/edit/forms/position/new`); */
            }}
          ></i>
        </div>
        <div className="d-flex flex-column mt-3">
          {userExperience.length ? (
            userExperience.map((experience) => {
              return (
                <UserExperienceDetails
                  key={experience._id}
                  history={props.history}
                  id={userId}
                  experience={experience}
                />
              );
            })
          ) : (
            <div className="d-flex">
              <div className="mr-3">
                <img
                  src={
                    "http://www.floorepoxyindustrial.com/images/colorchart/medium-gray.jpg"
                  }
                  style={{ width: "80px", height: "80px" }}
                  alt="thumbnail for now"
                />
              </div>
              <div
                className="d-flex justify-content-between w-100"
                style={{
                  borderBottom: "0.5px solid #ccc",
                  paddingBottom: "1em",
                }}
              >
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="m-0">Occupation</h5>
                  <p className="m-0">Company</p>
                  <small className="m-0">Oct 2021 - Oct 2021</small>
                </div>
                {/* <i className="bi bi-pencil" style={{ fontSize: "20px" }}></i> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Experience;
