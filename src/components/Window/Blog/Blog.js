import React from 'react';
import PropTypes from 'prop-types';
import tutorialShapes from '../../../helpers/propz/blogShapes';
import BlogItems from '../../BlogItems/BlogItems';
import './Blog.scss';

class Blogs extends React.Component {
  static propTypes = {
    tutorials: PropTypes.arrayOf(tutorialShapes),
    deleteSingleBlog: PropTypes.func,
    passListingToEdit: PropTypes.func,
  }

  render() {
    const {
      blogs,
      deleteSingleBlog,
      passListingToEdit,
    } = this.props;
    const blogItemComponents = blogs.map(blog => (
      <BlogItems
        blog={blog}
        key={blog.id}
        deleteSingleBlog={deleteSingleBlog}
        passListingToEdit={passListingToEdit}
      />
    ));

    return (
      <div className="blogs col">
        <ul>
          {blogItemComponents}
        </ul>
      </div>
    );
  }
}

export default Blogs;
