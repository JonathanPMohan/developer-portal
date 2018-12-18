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
import resourceData from '../helpers/data/resourceData';
import Profile from '../components/Profile/Profile';
import InputForm from '../components/Form/Form';
import Dashboard from '../components/Dashboard/Dashboard';
import Tabs from '../components/Tabs/Tabs';

class App extends Component {
  state = {
    authed: false,
    github_username: '',
    profile: [],
    resources: [],
  }

  componentDidMount() {
    connection();

    resourceData.getResourcesData()
      .then((resources) => {
        this.setState({ resources });
      })
      .catch(err => console.error('error with podcast GET', err));

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

  isAuthenticated = (username) => {
    this.setState({ authed: true, github_username: username });
  }

  render() {
    const logoutClickEvent = (username) => {
      authRequests.logoutUser();
      this.setState({ authed: false, github_username: username });
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
          <div className="row">
            <Profile profile={this.state.profile} />
            <InputForm />
            <Tabs />
            <Dashboard
              resources={this.state.resources}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
