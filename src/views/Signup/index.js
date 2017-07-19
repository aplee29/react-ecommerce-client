import React, { Component } from 'react';
import { connect } from 'react-redux';

// custom node modules
import { signup } from '../../redux/modules/Auth/actions';

export default class Signup extends Component {

  render() {
    return (
      <div className="signup">
        <h3>Create an Account</h3>
      </div>
    )
  }
}

// const Signup = () =>
//   <form className="signup_form">
//     <input type="email" />
//     <input type="password" />
//     <button type="submit">Create User</button>
//   </form>;
//
// export default Signup;
