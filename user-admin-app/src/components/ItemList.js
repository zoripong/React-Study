import React, { Component } from "react";
import Item from "./Item";
import "./ItemList.css";

class Form extends Component {
  render() {
    return (
      <div>
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

export default Form;
