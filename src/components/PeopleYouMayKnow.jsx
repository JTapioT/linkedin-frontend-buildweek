import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PeopleYouMayKnow = (props) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  async function fetchUsers() {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/profile/`,
        {
          /*headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
          },*/
        }
      );

      if (response.ok) {
        let responseJson = await response.json();
        console.log(responseJson);

        const users = responseJson
          .map((selectedUser, index) => {
            if (index < 5) {
              return selectedUser;
            }
          })
          .filter(Boolean);

        setSelectedUsers(users);
        console.log(selectedUsers);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      className="brdr-linkedin brdr-linked-people-you-may-know"
      style={{ height: "auto" }}
    >
      <h5>People You May Know</h5>

      {/* {
          NOTE: didn't know how to display it while the content is loading
          ________________________________________________________________
        {/* <div className="who-and-where mb-4">
          <div className="d-inline">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </div>
          <div className="name-company">
            <a href="#" className="text-dark">
              <h6>Cian Marckwick</h6>
            </a>
            <p className="text-muted mb-1">Ambassador of "It's pronounced [Key-en] not [Chan]"</p>
            <div className="default-btn-style">
              Connect
            </div>
          </div>
        </div> */}

      {selectedUsers.length
        ? selectedUsers.map((user) => {
            return (
              <div className="who-and-where mb-4">
                <div className="d-inline">
                  <img src={user.image} className="user-img-resize" />
                </div>
                <div className="name-company">
                  <Link
                    onClick={() => {
                      props.history.push(`/profile/${user._id}`);
                      props.history.go();
                    }}
                    className="text-dark"
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

export default PeopleYouMayKnow;
