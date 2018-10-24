import React, { Component } from "react";
import Item from "./Item";
import "./ItemList.css";

class Form extends Component {
  static defaultProps = {
    input: "",
    users: []
  };
  render() {
    const { data, onUpdate, onDelete } = this.props;
    const itemList = data.map(({ id, userId, password }) => (
      <Item
        id={id}
        userId={userId}
        password={password}
        key={id}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    ));
    return <div>{itemList}</div>;
  }
}

export default Form;
