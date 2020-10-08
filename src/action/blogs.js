import { UPDATE_QUESTION } from "./actionTypes";
export function fetchBlogs(tags) {
  return (dispatch) => {
    let url = `http://localhost:8000/scrap/${tags}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // disptach the fetched qustions

        // console.log(data.arr.data);
        dispatch(updateBlogs(data.arr.data, tags));
      });
  };
}

export function updateBlogs(blogs, tags) {
  return {
    type: UPDATE_QUESTION,
    blogs,
    tags,
  };
}
