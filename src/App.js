import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/navBar";
import Sketch from "./components/sketch";
import PhotoEdit from "./components/photoEdit";
import Poem from "./components/Poems";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/">
          <ScrollToTop>
            <Home />
          </ScrollToTop>
        </Route>
        <Route exact path="/about">
          <ScrollToTop>
            <About />
            <Contact />
          </ScrollToTop>
        </Route>
        <Route exact path="/skills">
          <ScrollToTop>
            <Skills />
            <Contact />
          </ScrollToTop>
        </Route>
        <Route exact path="/projects">
          <ScrollToTop>
            <Projects />
            <Contact />
          </ScrollToTop>
        </Route>
        <Route exact path="/sketch">
          <ScrollToTop>
            <Sketch />
            <Contact />
          </ScrollToTop>
        </Route>
        <Route exact path="/photo-edit">
          <ScrollToTop>
            <PhotoEdit />
            <Contact />
          </ScrollToTop>
        </Route>
        <Route exact path="/poem">
          <ScrollToTop>
            <Poem />
            <Contact />
          </ScrollToTop>
        </Route>
      </Router>
    </div>
  );
}

export default App;
