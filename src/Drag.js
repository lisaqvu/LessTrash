import React from "react";
import ReactDOM from "react-dom";
import DnD from "./components/drag/DnD";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function Drag() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <DnD />
      </DndProvider>
    </div>
  );
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Drag />, rootElement)

export default Drag;
