import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then((res) => {
      const user = res.additionalUserInfo.username;
      const { accessToken } = res.credential;
      this.props.isAuthenticated(user, accessToken);
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div id="authButton">
        <div className="Auth">
          <button className="btn" onClick={this.authenticateUser}><img src="https://coderwall-assets-0.s3.amazonaws.com/uploads/picture/file/4363/github.png" alt="login button" /></button>
        </div>
      </div>
    );
  }
}

export default Auth;
