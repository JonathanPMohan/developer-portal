import React from 'react';
import './Resource.scss';

class Resource extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <div className="resources">
        <h5>{resource.name}</h5>
      </div>
    );
  }
}

export default Resource;
