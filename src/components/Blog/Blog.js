import React from 'react';
import './Blog.scss';

class Blog extends React.Component {
  render() {
    const { blog } = this.props;
    return (
      <div className="blogs">
        <h5>{blog.name}
          <a href={blog.url} target="_blank" rel="noopener noreferrer">
            <span className="col-6">{blog.url}</span>
          </a></h5>
      </div>
    );
  }
}

export default Blog;
