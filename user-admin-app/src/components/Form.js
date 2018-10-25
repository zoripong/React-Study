import React, { Component } from "react";
import "./css/Form.css";

import { connect } from 'react-redux';
import { setInput } from '../actions';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    }
    this.onSearch = this.onSearch.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onKeyDownInput = this.onKeyDownInput.bind(this);
    this.onSearchCancle = this.onSearchCancle.bind(this);
  }

  render() {
    return (
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="검색하고 싶은 이름을 입력하세요!"
          value={this.props.input}
          name="input"
          onChange={this.onChangeInput}
          onKeyDown={this.onKeyDownInput}
        />
        <button className="form-button" onClick={this.onSearch}>
          검색
        </button>
      </form>
    );
  }

  onSearch(e) {
    // button or enter에 의한 검색
    e.preventDefault();
    const { input } = this.state;
    this.props.onUpdateIntput(input);
  }

  onChangeInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.props.onUpdateIntput(e.target.value);
  }

  onKeyDownInput(e) {
    if (e.key === "Enter") {
      console.log("Enter");
      e.preventDefault();
      this.onSearch(e);
    }
    if (e.key === "Escape") {
      console.log("Escape");
      this.onSearchCancle();
    }

  }

  onSearchCancle() {
    this.setState({
      input: "",
    });

    this.props.onUpdateIntput("");
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.searcher.users,
    input: state.searcher.input
  };
}


let mapDispatchToProps = (dispatch) => {
  return {
    onUpdateIntput: (value) => dispatch(setInput(value))
  };
}

Form = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Form;
