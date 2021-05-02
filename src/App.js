import { Route, Switch } from "react-router";
import "./App.scss";
import Navbar from "./Components/Navbar";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar></Navbar>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
            <HomePage />
            </Route>
            <Route path="/about" exact>
            <AboutPage />
            </Route>
            <Route path="/blogs" exact>
            <BlogPage />
            </Route>
            <Route path="/projects" exact>
            <ProjectPage />
            </Route>
            <Route path="/contact" exact>
            <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
