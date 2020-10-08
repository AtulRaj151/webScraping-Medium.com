import React, { Component } from "react";

class BlogsCard extends Component {
  render() {
    const { blog, tag } = this.props;
    return (
      <div>
        <div className="q-card">
          <div className="left">
            <div className="left-topic">Title</div>
            <div className="left-question">Author:-</div>
            <div className="left-tags">ReadingTime</div>
            <div className="left-tags">date</div>
            <div className="left-tags">Tags</div>
          </div>

          <div className="right">
            <div className="topic">{blog.title}</div>
            <div className="question-description">{blog.creater}</div>
            <div className="question-description">{blog.readingTime}</div>
            <div className="question-description">{blog.date}</div>

            <div className="footer">{tag}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogsCard;
