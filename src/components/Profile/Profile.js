import React from 'react';
import './Profile.scss';

// Git Hub Profile Component //
class Profile extends React.Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="profile col">
        <div className="profileWrap">
          <div className="card">
            <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img>
            <h1 className="card-title">{profile.login}</h1>
            <p className="card-text">{profile.bio}</p>
            <a href={profile.html_url} className="_blank">github.com/jonathanpmohan</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
