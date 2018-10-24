import React, { Component } from "react";
import UserTemplate from "./components/UserTemplate";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

class App extends Component {
  render() {
    return (
      <UserTemplate form={<Form />}>
        <ItemList />
      </UserTemplate>
    );
  }
}

export default App;
