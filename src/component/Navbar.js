import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../action/blogs";

class Navbar extends Component {
  handleSearchQuestion = (e) => {
    let tags = document.getElementById("search-box").value;
    if (tags.length === 0) {
      //  show notifications
      return;
    }
    this.props.dispatch(fetchBlogs(tags));
  };

  render() {
    console.log("NAVBAR", this.props);
    return (
      <div className="nav">
        <button
          id="home-btn"
          className={`btn btn-light btn-outline-dark btn-block`}
        >
          Scrap Medium.com
        </button>
        <div className="search-container">
          <input id="search-box" placeholder="Search Blogs by Tag..." />
          <button id="search-btn" onClick={this.handleSearchQuestion}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

function mapPropsTostate({ blogs }) {
  return {
    blogs,
  };
}
export default connect(mapPropsTostate)(Navbar);
