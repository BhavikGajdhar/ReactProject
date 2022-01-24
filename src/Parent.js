import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      parentName: "parent",
    };
  }
 
  greetParent(value) {
    alert(`This is ${value}`);
  }
  clickHandler(value) {
    console.log(value);
  } 
  render() {
    return (
      <>
        <Child greetHandler={this.greetParent} onTitleClick={this.clickHandler} />
      </>
    );
  }
}
export default Parent;
