import React from 'react';
import './Podcast.scss';

class Podcast extends React.Component {
  render() {
    const { podcast } = this.props;
    return (
      <div className="podcasts">
        <h5>{podcast.name}</h5>
      </div>
    );
  }
}

export default Podcast;
