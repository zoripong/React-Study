import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    return (
      <div>
        <div className="user-id">{this.props.user_id}</div>
        <div className="user-password">{this.props.password}</div>
        <div className="button-wrapper">
          <button onClick={this.props.onDelete}>삭제</button>
          <button onClick={this.props.onUpdate}>수정</button>
        </div>
      </div>
    );
  }
}

export default Item;
