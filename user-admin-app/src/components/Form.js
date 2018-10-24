import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="검색하고 싶은 이름을 입력하세요!"
          value={this.props.value}
          name="input"
          onChange={this.props.onChange}
          onKeyDown={this.props.onKeyPress}
        />
        <button className="form-button" onClick={this.props.onSearch}>
          검색
        </button>
      </form>
    );
  }
}

export default Form;
