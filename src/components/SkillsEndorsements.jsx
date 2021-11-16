import {useState, useEffect} from 'react';

function SkillsEndorsements() {

  const [showMore, setShowMore] = useState(false);
  const [onHover, setHoverStyle] = useState(false);

  const showMoreStyle = {
    border: "1px solid lightgrey",
    borderBottomLeftRadius: "18px",
    borderBottomRightRadius: "18px",
    backgroundColor: onHover ? "#ccc" : "white",
    cursor: "pointer",
    transition: "0.2s linear",
  };


  return (
    <div className="mt-3">
      <div
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
          <h5>Skills & endorsements</h5>
          <div className="d-flex align-items-baseline">
            <p className="p-0 m-0 mr-3">Add a new skill</p>
            <i class="bi bi-pencil" style={{ fontSize: "20px" }}></i>
          </div>
        </div>
        <div className="default-btn-style mt-3">Take a skill quiz</div>
        <div className="mt-3">
          <div
            className="d-flex flex-column"
            style={{ borderBottom: "0.5px solid #ccc" }}
          >
            <h6>
              Endorsement for something{" "}
              <span className="text-muted">
                &middot;
                <small className="ml-1">5</small>
              </span>
            </h6>
            <p className="mt-2">
              <strong>John Doe</strong> has given an endorsement for this skill
            </p>
          </div>
          <div
            className="d-flex flex-column mt-2"
            style={{ borderBottom: "0.5px solid #ccc" }}
          >
            <h6>
              Endorsement for something{" "}
              <span className="text-muted">
                &middot;
                <small className="ml-1">3</small>
              </span>
            </h6>
            <p className="mt-2">
              <strong>John Doe</strong> has given an endorsement for this skill
            </p>
          </div>
          <div className="d-flex flex-column mt-2">
            <h6>
              Endorsement for something{" "}
              <span className="text-muted">
                &middot;
                <small className="ml-1">1</small>
              </span>
            </h6>
            <p className="mt-2">
              <strong>John Doe</strong> has given an endorsement for this skill
            </p>
          </div>
        </div>
      </div>

      {showMore && (
        <div className="pb-5 pt-4"
          style={{
            padding: "1px 24px",
            backgroundColor: "white",
            borderLeft: "1px solid lightgrey",
            borderRight: "1px solid lightgrey",
            borderTop: "1px solid lightgrey"
          }}
        >
          <div className="mt-2">
            <p
              className="text-muted m-0 pb-2"
              style={{ borderBottom: "1px solid #ccc", fontSize: "1.1em" }}
            >
              Industry knowledge
            </p>
            <p className="m-0 mt-3">
              <strong>Some special knowledge</strong>
            </p>
          </div>
          <div className="mt-4">
            <div
              className="d-flex"
              style={{ borderBottom: "1px solid #ccc", fontSize: "1.1em" }}
            >
              <p className="text-muted m-0 pb-2 mr-3">Other skills</p>
              <i
                class="bi bi-question-circle-fill"
                style={{ color: "grey" }}
              ></i>
            </div>
            <p className="m-0 mt-3">
              <strong>Some special knowledge</strong>
            </p>
          </div>
        </div>
      )}

      <div
        className="d-flex align-items-baseline justify-content-center py-2"
        style={showMoreStyle}
        onClick={() => {
          setShowMore(showMore ? false : true);
        }}
        onMouseOver={() => {
          setHoverStyle(onHover ? false : true);
        }}
        onMouseLeave={() => {
          setHoverStyle(onHover ? false : true);
        }}
      >
        <h5 className="m-0 mr-1" style={{ color: onHover ? "white" : "grey" }}>
          {showMore ? "Show Less" : "Show More"}
        </h5>
        {showMore ? (
          <i class="bi bi-chevron-up" style={{ color: onHover ? "white" : "grey" }}></i>
        ) : (
          <i class="bi bi-chevron-down" style={{ color: onHover ? "white" : "grey" }}></i>
        )}
      </div>
    </div>
  );
}

export default SkillsEndorsements;
