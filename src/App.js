import MyNavBar from "./components/MyNavBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import AddExperience from "./components/experience/AddExperience";
import EditExperience from "./components/experience/EditExperience";
import NewsFeedProfile from "./components/NewsFeedProfile";
import AddToYourFeed from "./components/AddToYourFeed";
import FeedLayout from "./components/FeedLayout";
import AddPost from "./components/news-feed/AddPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          path="/feed/:userId"
          render={(props) => (
            <>
              <MyNavBar />
              <FeedLayout {...props} />
              <Footer />
            </>
          )}
        />
        <Route
          path="/profile/:id"
          render={(props) => (
            <>
              <MyNavBar />
              <Layout {...props} />
              <Footer />
            </>
          )}
        />
        {/* <Route
          path="/profile/:id/edit/forms/position/new/"
          render={(props) => <AddExperience {...props} />}
        /> */}
        {/* <Route
          path="/profile/:id/edit/forms/position/:experienceId"
          render={(props) => <EditExperience {...props} />}
        /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
