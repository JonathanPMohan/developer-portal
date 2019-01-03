import React from 'react';
import './Tutorial.scss';

class Tutorial extends React.Component {
  render() {
    const { tutorial } = this.props;
    return (
      <div className="tutorials">
        <h5>{tutorial.name}</h5>
      </div>
    );
  }
}

export default Tutorial;
