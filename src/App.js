import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardGame from "./CardGame";
import Home from "./Home";
function Recyle() {
  return <h2>Placeholder</h2>;
}

function Reuse() {
  return <h2>Placeholder</h2>;
}

class App extends Component {
  render() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/reduce/" className="nav-link">Reduce</Link>
            </li>
            <li>
              <Link to="/recycle/" className="nav-link">Recycle</Link>
            </li>
            <li>
              <Link to="/reuse/" className="nav-link">Reuse</Link>
            </li>
          </ul>
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
