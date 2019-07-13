import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardGame from "./CardGame";
import Home from "./Home";
import logo from "./assets/logo.png";
function Recyle() {
  return <h2>Game lật bài</h2>;
}

function Reuse() {
  return <h2>Video embedding</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <nav className="navbar navbar-expand-lg indigo">
          <img src={logo} alt={"logo"} />
            <div
              className="collapse navbar-collapse myNavbar"
              id="navbarText"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="./">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./reuse">
                    Reuse
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./reduce">
                    Reduce
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
          <Route path="/reduce/" component={CardGame} />
          <Route path="/recyle/" component={Recyle} />
          <Route path="/reuse/" component={Reuse} />
        </div>
      </Router>
    );
  }
}

export default App;
