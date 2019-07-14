import React, { Component } from "react";
class Counter extends Component {
    
    constructor(props){
      super(props)
      this.state={
        score: props.score
      }
    }
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <div className="row score">
          <label>Score:&nbsp;</label>{this.props.score}
        </div>
      </div>
    );
  }
 
  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags</p>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;