import React from 'react';
import './Resource.scss';

class Resource extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <div className="resources">
        <h2>{resource.name}</h2>
      </div>
    );
  }
}

export default Resource;
