import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavbar/MyNavbar';
import Profile from '../components/Profile/Profile';
import Tutorials from '../components/Window/Tutorial/Tutorial';
import Blogs from '../components/Window/Blog/Blog';
import Resources from '../components/Window/Resource/Resource';
import Podcasts from '../components/Window/Podcast/Podcast';
import connection from '../helpers/data/connection';
import tutorials from '../helpers/data/tutorialRequests';
import blog from '../helpers/data/blogRequests';
import resource from '../helpers/data/resourceRequests';
import podcast from '../helpers/data/podcastRequests';
import githubData from '../helpers/data/githubData';
// import dashBoard from '../components/Tabs/Tabs';
import Form from '../components/Form/Form';
import './App.scss';
import authRequests from '../helpers/data/authRequests';

class App extends Component {
  state = {
    authed: false,
    githubUsername: '',
    tutorials: [],
    blogs: [],
    resources: [],
    profile: [],
    podcasts: [],
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  getGithubData = (users, gitHubTokenStorage) => {
    githubData.getUser(gitHubTokenStorage)
      .then((profile) => {
        this.setState({ profile });
      });
    githubData.getUserEvents(users, gitHubTokenStorage)
      .then((commitCount) => {
        this.setState({ commitCount });
      })
      .catch(err => console.error('error with github user events GET', err));
  }

  componentDidUpdate() {
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const users = sessionStorage.getItem('githubUsername');
        const gitHubTokenStorage = sessionStorage.getItem('githubToken');
        this.getGithubData(users, gitHubTokenStorage);
      } else {
        this.setState({
          authed: false,
        });
      }
    });

    tutorials.getRequest()
      .then((tutorials) => {
        this.setState({ tutorials });
      })
      .catch(err => console.error('err with tutorials GET', err));

    blog.getRequest()
      .then((blogs) => {
        this.setState({ blogs });
      })
      .catch(err => console.error('err with blogs GET', err));

    resource.getRequest()
      .then((resources) => {
        this.setState({ resources });
      })
      .catch(err => console.error('err with resources GET', err));

    podcast.getRequest()
      .then((podcasts) => {
        this.setState({ podcasts });
      })
      .catch(err => console.error('err with podcast GET', err));
  }

  isAuthenticated = (user, accessToken) => {
    this.setState({
      authed: true,
      githubUsername: user,
      githubToken: accessToken,
    });
    sessionStorage.setItem('githubUsername', user);
    sessionStorage.setItem('githubToken', accessToken);
  }

  componentWillUnmount() {
    this.removeListener();
  }

  deleteOne = (tutorialId) => {
    tutorials.deleteTutorial(tutorialId)
      .then(() => {
        tutorials.getRequest()
          .then((tutorials) => {
            this.setState({ tutorials });
          });
      })
      .catch(err => console.error('error with delete single tutorial', err));
  }

  deleteTwo = (blogId) => {
    blog.deleteBlog(blogId)
      .then(() => {
        blog.getRequest()
          .then((blogs) => {
            this.setState({ blogs });
          });
      })
      .catch(err => console.error('error with delete single blog', err));
  }

  deleteThree = (resourcesId) => {
    resource.deleteResources(resourcesId)
      .then(() => {
        resource.getRequest()
          .then((resources) => {
            this.setState({ resources });
          });
      })
      .catch(err => console.error('error with delete single blog', err));
  }

  deleteFour = (podcastId) => {
    podcast.deletePodcast(podcastId)
      .then(() => {
        podcast.getRequest()
          .then((podcasts) => {
            this.setState({ podcasts });
          });
      })
      .catch(err => console.error('error with delete single blog', err));
  }


  formSubmitEvent = (newListing, tab) => {
    if (tab === 'tutorials') {
      tutorials.postRequest(newListing)
        .then(() => {
          tutorials.getRequest()
            // eslint-disable-next-line no-shadow
            .then((tutorials) => {
              this.setState({ tutorials });
            });
        })
        .catch(err => console.error('error with tutorial post', err));
    } else if (tab === 'blog') {
      blog.postRequestBlog(newListing)
        .then(() => {
          blog.getRequest()
            // eslint-disable-next-line no-shadow
            .then((blogs) => {
              this.setState({ blogs });
            });
        })
        .catch(err => console.error('error with blogs post', err));
    } else if (tab === 'resource') {
      resource.postRequestResources(newListing)
        .then(() => {
          resource.getRequest()
            // eslint-disable-next-line no-shadow
            .then((resources) => {
              this.setState({ resources });
            });
        })
        .catch(err => console.error('error with blogs post', err));
    } else if (tab === 'podcast') {
      podcast.postRequestPodcast(newListing)
        .then(() => {
          podcast.getRequest()
            // eslint-disable-next-line no-shadow
            .then((podcasts) => {
              this.setState({ podcasts });
            });
        })
        .catch(err => console.error('error with blogs post', err));
    }
  }

  render() {
    const {
      authed,
      isEditing,
      editId,
    } = this.state;

    const logoutClickEvent = () => {
      authRequests.logoutUser();
      sessionStorage.clear();
      this.setState({ authed: false, githubUsername: '', githubToken: '' });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavBar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAuthenticated={this.isAuthenticated} />
        </div>
      );
    }

    return (
      <div className="App">
        <MyNavBar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="wrapper">
          <div className="profile">
            {authed && <Profile profile={this.state.profile} commitCount={this.state.commitCount} />}
          </div>
          <div className="formPrint">
            <Form className="form" onSubmit={this.formSubmitEvent} isEditing={isEditing} editId={editId} />
          </div>
          <div className="tabs">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Tutorials
            </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Blogs
            </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Podcasts
            </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  Resources
            </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Tutorials
                      tutorials={this.state.tutorials}
                      deleteSingleTutorial={this.deleteOne}
                      onTutorialSelect={this.tutorialSelectEvent}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm='12'>
                    <Blogs
                      blogs={this.state.blogs}
                      deleteSingleBlog={this.deleteTwo}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <Podcasts
                      podcasts={this.state.podcasts}
                      deleteSinglePodcast={this.deleteThree}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="12">
                    <Resources
                      resources={this.state.resources}
                      deleteSingleResource={this.deleteFour}
                    />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
