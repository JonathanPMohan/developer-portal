import React from 'react';
import PropTypes from 'prop-types';
import resourceShapes from '../../helpers/propz/resourceShapes';
import './ResourceItems.scss';
import authRequests from '../../helpers/data/authRequests';

class ResourcesItems extends React.Component {
  static propTypes = {
    resource: resourceShapes,
    deleteSingleResource: PropTypes.func,
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passListingToEdit, resource } = this.props;
    passListingToEdit(resource.id);
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleResource, resource } = this.props;
    deleteSingleResource(resource.id);
  }

  render() {
    const { resource } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (resource.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn trash btn-secondary" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
            <span className="col">
              <input type="radio" id="radio2" name="radioDisabled" className="custom-Radio-Resources" />
              <label className="blogsLabel" htmlFor="radioBlogs">DONE</label>
            </span>
          </div>
        );
      }
      return <span className="col-3"></span>;
    };
    return (
      <li className="resource-item text-center">
        <span className="col">{resource.name}</span>
        <span className="col"><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.url}</a></span>
        {makeButtons()}
      </li>
    );
  }
}

export default ResourcesItems;
