import React, { Component } from "react";
import "./css/UserTemplate.css";

class UserTemplate extends Component {
  render() {
    const { form, children } = this.props;
    return (
      <section className="template-root">
        <section className="template-header">유저관리</section>
        <section className="template-form">{form}</section>
        <section className="template-child">{children}</section>
      </section>
    );
  }
}

export default UserTemplate;
