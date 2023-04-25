import React, { Component } from 'react';
import loginImg from "../../../static/assets/images/auth/login.jpg"
import Login from './login';

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSucessfulAuth = this.handleSucessfulAuth.bind(this)
    this.handleUnsucessfulAuth = this.handleUnsucessfulAuth.bind(this)
  }

  handleSucessfulAuth() {
    this.props.handleSucessfulLogin();
    this.props.history.push("/")
  }

  handleUnsucessfulAuth() {
    this.props.handleSucessfulLogout()
  }

  render() {
    return (
      <div className='auth-page-wrapper'>
        <div
          className='left-column'
          style={{
            backgroundImage: `url(${loginImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className='right-column'>
          <Login
            handleSucessfulAuth={this.handleSucessfulAuth}
            handleUnsucessfulAuth={this.handleUnsucessfulAuth}
          />
        </div>
      </div>
    );
  }
}