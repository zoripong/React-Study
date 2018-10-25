import React, { Component } from "react";
import UserTemplate from "./UserTemplate";
import Form from "./Form";
import ItemList from "./ItemList";

class App extends Component {

  handleDelete = id => {
    console.log("삭제", id);
    // const { showUsers } = this.state;
    this.users = this.users.filter(user => user.id !== id);
    this.setState({
      input: "",
      showUsers: [...this.users]
    });
    console.log(this.users);
  };

  componentDidMount() {
    // 여기서 api
    this.user = [];
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

export default App;
