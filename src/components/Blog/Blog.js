import React from 'react';
import './Blog.scss';

class Blog extends React.Component {
  render() {
    const { blog } = this.props;
    return (
      <div className="blogs">
        <h5>{blog.name}</h5>
      </div>
    );
  }
}

export default Blog;
