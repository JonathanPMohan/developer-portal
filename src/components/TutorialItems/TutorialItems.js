import React from 'react';
import PropTypes from 'prop-types';
import tutorialShape from '../../helpers/propz/tutorialShapes';
import authRequests from '../../helpers/data/authRequests';
import './TutorialItems.scss';

class TutorialItems extends React.Component {
  static propTypes = {
    tutorial: tutorialShape,
    deleteSingleTutorial: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleTutorial, tutorial } = this.props;
    deleteSingleTutorial(tutorial.id);
  }

  render() {
    const { tutorial } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (tutorial.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn trash btn-default" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
            <span className="col">
              <input type="radio" id="radio2" name="radioDisabled" className="custom-Radio-Tutorials" />
              <label className="blogsLabel" htmlFor="radioBlogs">DONE</label>
            </span>
          </div>
        );
      }
      return <span className="col-3"></span>;
    };
    return (
      <li className="tutorial-item text-left">
        <span className="col">{tutorial.name}</span>
        <span className="col-3"><a href={tutorial.url}>{tutorial.url}</a></span>
        {makeButtons()}
      </li>
    );
  }
}

export default TutorialItems;
