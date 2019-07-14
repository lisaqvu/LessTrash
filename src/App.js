import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import CardGame from "./CardGame";
import Home from "./Home";
import DnD from "./components/drag/DnD";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import logo from "./assets/logo.png";

import { Player } from "video-react";
import "../node_modules/video-react/dist/video-react.css"; // import css

function Video() {
  return (
    <Player
      playsInline
      src="https://www.youtube.com/watch?v=HkHEJEzMKwc"
    />
  );
}

function Drag() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <DnD />
      </DndProvider>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router basename='/'>
        <div>
          <nav className="navbar navbar-expand-lg indigo">
            <Link to="./">
              <img className="logo" src={logo} alt={"logo"} />
            </Link>

            <div
              className="collapse navbar-collapse navbar-right"
              id="navbarText"
            >
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="./reduce">
                    Reduce
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./reuse">
                    Reuse
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./recycle">
                    Recycle
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/reduce" component={CardGame} />
          <Route path="/recyle" component={Video} />
          <Route path="/reuse" component={Drag} />
        </div>
      </Router>
    );
  }
}

export default App;
