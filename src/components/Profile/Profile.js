import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { profile, commitCount } = this.props;

    return (
      <div className="profile col">
        <div className="profileWrap">
          <div className="card">
            <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img>
            <p className="card-text">{profile.bio}</p>
            <h2 className="card-title">{profile.login}</h2>
            <a href={profile.html_url} className="_blank">https://github.com/JonathanPMohan</a>
            <h1>{commitCount}</h1>
            <h4>COMMITS</h4>
            <p>In the last 5 days</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
