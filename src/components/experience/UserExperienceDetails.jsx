import { useState } from "react";


function UserExperienceDetails({ history, id, experience }) {
  const [penHover, setPenHover] = useState(false);
  const [isExperienceEditClicked, setExperienceEditClicked] = useState(false);
  const [detailsHover, setDetailsHover] = useState(false);

  const penStyle = {
    fontSize: "1.2em",
    backgroundColor: penHover ? "lightgrey" : null,
    borderRadius: "50%",
    padding: "0.4em 0.6em",
    cursor: penHover ? "pointer" : null,
    transition: "ease-out 0.3s",
    visibility: detailsHover ? "visible" : "hidden"
  };

  return (
    <>
    <div key={experience._id} className="d-flex" onMouseOver={() =>{ setDetailsHover(true)}} onMouseLeave={() => {setDetailsHover(false)}}>
      <div className="mr-3 mt-2">
        <img
          src={
            experience.image
              ? experience.image
              : "http://www.floorepoxyindustrial.com/images/colorchart/medium-gray.jpg"
          }
          style={{ width: "80px", height: "80px" }}
          alt="thumbnail for now"
        />
      </div>
      <div
        className="d-flex justify-content-between w-100 mt-2"
        style={{
          borderBottom: "0.5px solid #ccc",
          paddingBottom: "1em",
        }}
      >
        <div className="d-flex flex-column justify-content-between">
          <h5 className="m-0">{experience.role}</h5>
          <p className="m-0">{experience.company}</p>
          <p className="m-0">{experience.description}</p>
          <p className="m-0" style={{ fontSize: "0.9em" }}>
            {`${
              experience.startDate && experience.startDate.substring(0, 10)
            } - ${
              experience.endDate ? experience.endDate.substring(0, 10) : ""
            }`}
          </p>
        </div>
        <i
          className="bi bi-pencil align-self-start"
          data-toggle="modal"
          data-target={isExperienceEditClicked ? "#editExperienceModal" : null}
          style={penStyle}
          onMouseEnter={() => {
            setPenHover(true);
          }}
          onMouseLeave={() => {
            setPenHover(false);
          }}
          onClick={() => {
            setExperienceEditClicked(true);
            history.push(
            `/profile/${id}/edit/forms/position/${experience._id}`
            );
          }}
        ></i>
      </div>
    </div>
    </>
  );
}
export default UserExperienceDetails;
