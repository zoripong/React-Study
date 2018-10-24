import React, { Component } from "react";
import UserTemplate from "./components/UserTemplate";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

class App extends Component {
  constructor(props) {
    super(props);
    this.users = [
      {
        id: 1,
        user_id: "test",
        password: "test"
      },
      {
        id: 2,
        user_id: "test2",
        password: "test2"
      }
    ];
    this.state = {
      input: "",
      showUsers: [...this.users] /* FIXME */
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    this.handleSearch(e);
  };

  handleSearch = e => {
    const { input } = this.state;
    this.setState({
      showUsers: this.users.filter(user =>
        user.user_id.includes(e.target.value)
      )
    });
    e.preventDefault();
  };

  handleCancle = () => {
    this.setState({
      input: "",
      showUsers: [...this.users]
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      console.log("확인");
      e.stopPropagation();
      this.handleSearch(e);
    }
    if (e.key === "Escape") {
      console.log("취소");
      this.handleCancle();
    }
  };

  handleUpdate = () => {
    console.log("업데이트");
  };
  handleDelete = () => {
    console.log("삭제");
  };

  componentDidMount() {
    // 여기서 api
  }

  render() {
    const {
      handleChange,
      handleSearch,
      handleKeyPress,
      handleUpdate,
      handleDelete
    } = this;
    return (
      <UserTemplate
        form={
          <Form
            value={this.state.input}
            onChange={handleChange}
            onSearch={handleSearch}
            onKeyPress={handleKeyPress}
          />
        }
      >
        <ItemList
          data={this.state.showUsers}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </UserTemplate>
    );
  }
}

export default App;
