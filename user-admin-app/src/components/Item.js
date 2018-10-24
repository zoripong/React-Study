import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    return (
      <div>
        <div className="user-id">id</div>
        <div className="user-password">password</div>
        <div className="button-wrapper">
          <button>삭제</button>
          <button>수정</button>
        </div>
      </div>
    );
  }
}

export default Item;
