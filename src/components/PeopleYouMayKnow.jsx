import { useEffect, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";


const PeopleYouMayKnow = (props) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  async function fetchUsers() {
    try {
      // Will skip first one. For now skips the hard-coded user we use. Later should be made sure that current user will not be provided in the list.
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/profile?limit=6&offset=1`
      );

      if (response.ok) {
        let responseJson = await response.json();
        setSelectedUsers(responseJson.profile);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      className="brdr-linkedin brdr-linked-people-you-may-know"
      style={{ height: "auto" }}
    >
      <h5>People You May Know</h5>
      {selectedUsers.length
        ? selectedUsers.map((user) => {
            return (
              <div key={user._id} className="who-and-where mb-4">
                <div className="d-inline">
                  <img src={user.image} className="user-img-resize" />
                </div>
                <div className="name-company">
                  <Link
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      history.push(`/profile/${user._id}`);
                      history.go();
                    }}
                  >
                    <h6>
                      {user.name} {user.surname}
                    </h6>
                  </Link>
                  <p className="text-muted mb-1">{user.title}</p>
                  <div className="default-btn-style">Connect</div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default withRouter(PeopleYouMayKnow);
