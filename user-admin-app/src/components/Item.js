import React, { Component } from "react";
import "./css/Item.css";

import { connect } from 'react-redux';
import { updateUser, deleteUser } from '../actions';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      userId: "",
      password: ""
    };
  }

  handleDelete = () => {
    const { onDeleteUser, id } = this.props;
    onDeleteUser(id);
  };

  handleToggleEvent = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { id, userId, password } = this.props;

    if (!prevState.editing && this.state.editing) {
      // false -> true
      // div -> input
      this.setState({
        userId: userId,
        password: password
      });
    }

    if (prevState.editing && !this.state.editing) {
      // true -> false
      // input -> div
      const { userId, password } = this.state;
      this.props.onUpdateUser(id, { userId, password });

    }
  }

  render() {
    if (this.state.editing) {
      return (
        <div>
          <input
            placeholder={this.props.userId}
            type="text"
            name="userId"
            className="input-user-info"
            onChange={this.handleChange}
          />
          <input
            placeholder={this.props.password}
            type="text"
            name="password"
            className="input-user-info"
            onChange={this.handleChange}
          />
          <div className="button-wrapper">
            <button onClick={this.handleDelete}>삭제</button>
            <button onClick={this.handleToggleEvent}>수정</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="user-id">{this.props.userId}</div>
        <div className="user-password">{this.props.password}</div>
        <div className="button-wrapper">
          <button onClick={this.handleDelete}>삭제</button>
          <button onClick={this.handleToggleEvent}>수정</button>
        </div>
      </div>
    );
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (id, data) => dispatch(updateUser(id, data)),
    onDeleteUser: (id) => dispatch(deleteUser(id))
  };
}

Item = connect(undefined, mapDispatchToProps)(Item);
export default Item;
