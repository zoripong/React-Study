import React, { Component } from "react";
import Item from "./Item";

import { connect } from 'react-redux';

class ItemList extends Component {
  render() {
    // const { showUsers, onUpdate, onDelete } = this.props;
    const itemList = this.props.showUsers.map(({ id, userId, password }) => (
      /* 이게 맞나..? */
      <Item
        id={id}
        userId={userId}
        password={password}
        key={id}
      />
    ));
    return <div>{itemList}</div>;
  }
}


let mapStateToProps = (state) => {
  return {
    showUsers: state.searcher.showUsers
  };
}

ItemList = connect(mapStateToProps)(ItemList);

export default ItemList;
