import React, {Component} from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import CardGame from "./CardGame";
import Home from "./Home";
import DnD from "./components/drag/DnD";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function Reuse() {
  return <h2>Placeholder</h2>;
}

function Drag(){
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
    <Drag />
  //   <Router>
  //     <div>
  //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //         <ul className="navbar-nav mr-auto">
  //           <li>
  //             <NavLink to="/" className="nav-link">Home</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/reduce/" className="nav-link">Reduce</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/recycle/" className="nav-link">Recycle</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/reuse/" className="nav-link">Reuse</NavLink>
  //           </li>
  //         </ul>
  //       </nav>

  //       <Route path="/" exact component={Home} />
  //       <Route path="/reduce/" component={CardGame} />
  //       <Route path="/recyle/" exact component={Drag} />
  //       <Route path="/reuse/" component={Reuse} />
  //     </div>
  //   </Router>
  );
  }
}

export default App;
