import React, { Component } from "react";
import { connect } from "react-redux";

import BlogsCard from "./BlogsCard";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    const { result, tags } = this.props.blogs;

    console.log("BLOOGOOGb", result);

    return (
      <div>
        <Navbar />

        {result.length !== 0 ? (
          result.map((blog, index) => (
            <BlogsCard blog={blog} tag={tags} key={`blog-${index}`} />
          ))
        ) : (
          <h2>Search a Tag / tags are empty / not found ....</h2>
        )}
      </div>
    );
  }
}

function mapToPropState(state) {
  return {
    blogs: state.blogs,
  };
}

export default connect(mapToPropState)(App);
