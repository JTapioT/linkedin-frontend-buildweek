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
                "http://www.floorepoxyindustrial.com/images/colorchart/medium-gray.jpg"
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
              <h5 className="m-0">Strive School</h5>
              <p className="m-0">Coding school to become wizard in coding</p>
              <small className="m-0 text-muted">2021 - 2022</small>
              <p className="m-0 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ab maiores ipsam mollitia reprehenderit dignissimos.</p>
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
                "http://www.floorepoxyindustrial.com/images/colorchart/medium-gray.jpg"
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
              <h5 className="m-0">Strive School</h5>
              <p className="m-0">Coding school to become wizard in coding</p>
              <small className="m-0 text-muted">2021 - 2022</small>
              <p className="m-0 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ab maiores ipsam mollitia reprehenderit dignissimos.</p>
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
                "http://www.floorepoxyindustrial.com/images/colorchart/medium-gray.jpg"
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
              <h5 className="m-0">Strive School</h5>
              <p className="m-0">Coding school to become wizard in coding</p>
              <small className="m-0 text-muted">2021 - 2022</small>
              <p className="m-0 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ab maiores ipsam mollitia reprehenderit dignissimos.</p>
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