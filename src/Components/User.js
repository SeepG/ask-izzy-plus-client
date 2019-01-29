import React, { Component } from "react";
class User extends Component {
  render() {
    // User component inherits props from User model, renders object's key/values as an array to Dashboard
    const { user } = this.props;
    const { organisation } = this.props;

    return (
      <React.Fragment>
        {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        <h1> Welcome {user.firstName} </h1>
        <h3> User details: </h3>
        <p> First Name:  {user.firstName} </p>
        <p> Last Name:  {user.lastName} </p>
        <p> Registered Email:  {user.email} </p>
        <p> Organisation:  {organisation.name} </p>
      </React.Fragment>
    );
  }
}
export default User;