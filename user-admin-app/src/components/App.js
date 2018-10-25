import React, { Component } from "react";
import UserTemplate from "./UserTemplate";
import Form from "./Form";
import ItemList from "./ItemList";
import axios from 'axios';

import { connect } from 'react-redux';
import { receiveData } from '../actions';



class App extends Component {

  componentDidMount() {
    // 여기서 api
    this.user = [];
    console.log("안녕?");
    let getUsers = () => {
      axios.get('http://119.205.221.104:8000/users/').then(response => {
        this.props.onReceive(response.data.result.users);
        console.log(response.data.result.users);
        setTimeout(getUsers, 1000 * 60 * 60); // every one hour
      });
    }

    getUsers();

  }



  render() {
    return (
      <UserTemplate
        form={
          <Form users={this.users} />
        }
      >
        <ItemList />
      </UserTemplate>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReceive: (value) => {
      dispatch(receiveData(value));
    }
  }
}
export default connect(undefined, mapDispatchToProps)(App);
