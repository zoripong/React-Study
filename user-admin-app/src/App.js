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
        userId: "test",
        password: "test"
      },
      {
        id: 2,
        userId: "test2",
        password: "test2"
      }
    ];
    this.state = {
      input: "",
      showUsers: [...this.users]
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      showUsers: this.users.filter(user => user.userId.includes(e.target.value))
    });
  };

  handleSearch = e => {
    this.setState({
      showUsers: this.users.filter(user =>
        user.userId.includes(this.state.input)
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
      this.handleSearch();
    }
    if (e.key === "Escape") {
      console.log("취소");
      this.handleCancle();
    }
  };

  handleUpdate = (id, data) => {
    console.log("업데이트", data);
    this.users = this.users.map(
      user => (id === user.id ? { ...user, ...data } : user)
    );
    this.setState({
      showUsers: [...this.users]
    });
  };
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
