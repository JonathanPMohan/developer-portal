import React from 'react';
import './Blog.scss';

class Blog extends React.Component {
  render() {
    const { blog } = this.props;
    return (
      <div className="blogs">
        <h2>{blog.name}</h2>
      </div>
    );
  }
}

export default Blog;
