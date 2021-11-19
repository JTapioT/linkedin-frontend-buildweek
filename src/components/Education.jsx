function Education() {
  return (
    <div
      style={{
        borderBottomRightRadius: "18px",
        borderBottomLeftRadius: "18px",
        borderTop: "0.1px solid lightgrey",
        borderBottom: "0.1px solid lightgrey",
        borderLeft: "1px solid lightgrey",
        borderRight: "1px solid lightgrey",
        padding: "24px",
        backgroundColor: "white",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h5>Education</h5>
        <i class="bi bi-plus-lg" style={{ fontSize: "20px" }}></i>
      </div>
      <div className="d-flex flex-column mt-3">
        {/* Education details */}
        <div className="d-flex">
          <div className="mr-3">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-dzF_L5Qn2v5USjNvT_GG_JX6-PpzIpqkw&usqp=CAU"
              }
              style={{ width: "80px", height: "80px" }}
              alt="thumbnail for now"
            />
          </div>

          <div
            className="d-flex justify-content-between w-100"
            style={{ borderBottom: "0.5px solid #ccc", paddingBottom: "1em" }}
          >
            <div className="d-flex flex-column justify-content-between">
              <h5 className="m-0">Front End</h5>
              <p className="m-0">React</p>
              <small className="m-0 text-muted">2021 - 2022</small>
              <p className="m-0 mt-4">
                Front-end web development is the development of the graphical
                user interface of a website, through the use of HTML, CSS, and
                JavaScript,
              </p>
            </div>
            <i class="bi bi-pencil" style={{ fontSize: "20px" }}></i>
          </div>
        </div>
        {/* Education detail row ends */}
        {/* Education details */}
        <div className="d-flex mt-4">
          <div className="mr-3">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Fah0Coj3Jkd3m4US7WhCM2359wa-8TTApg&usqp=CAU"
              }
              style={{ width: "80px", height: "80px" }}
              alt="thumbnail for now"
            />
          </div>

          <div
            className="d-flex justify-content-between w-100"
            style={{ borderBottom: "0.5px solid #ccc", paddingBottom: "1em" }}
          >
            <div className="d-flex flex-column justify-content-between">
              <h5 className="m-0">Backend</h5>
              <p className="m-0">Mongoose </p>
              <small className="m-0 text-muted">2021 - 2022</small>
              <p className="m-0 mt-4">
                the terms frontend and backend refer to the separation of
                concerns between the presentation layer (
              </p>
            </div>
            {/*  <i class="bi bi-pencil" style={{ fontSize: "20px" }}></i> */}
          </div>
        </div>
        {/* Education detail row ends */}
        {/* Education details */}
        <div className="d-flex mt-4">
          <div className="mr-3">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYw9N2x9zWPyMwmFtOTpnota72vUzy2rEi5Q&usqp=CAU"
              }
              style={{ width: "80px", height: "80px" }}
              alt="thumbnail for now"
            />
          </div>

          <div
            className="d-flex justify-content-between w-100"
            style={{ borderBottom: "0.5px solid #ccc", paddingBottom: "1em" }}
          >
            <div className="d-flex flex-column justify-content-between">
              <h5 className="m-0">Full Stack</h5>
              <p className="m-0">React , ExpressJS, Node JS, Mongoose</p>
              <small className="m-0 text-muted">2021 - 2022</small>
              <p className="m-0 mt-4">
                Full stack development includes pretty much any project where
                you're working on (or building) both the front and back end of a
                site or app at the same time
              </p>
            </div>
            {/*  <i class="bi bi-pencil" style={{ fontSize: "20px" }}></i> */}
          </div>
        </div>
        {/* Education detail row ends */}
      </div>
    </div>
  );
}

export default Education;
