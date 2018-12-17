import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../components/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import connection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import authRequests from '../helpers/data/authRequests';
import githubData from '../helpers/data/githubData';
import Profile from '../components/Profile/Profile';

class App extends Component {
  state = {
    authed: false,
    profile: [],
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      githubData.getUserEvents(user);
      githubData.getUser(user)
        .then((profile) => {
          this.setState({ profile });
        })
        .catch(err => console.error('error with github profile GET', err));
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <div className="row">
            <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
            <Auth isAuthenticated={this.isAuthenticated} />
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="row">
          <Profile profile={this.state.profile} />
        </div>
      </div>
    );
  }
}

export default App;
