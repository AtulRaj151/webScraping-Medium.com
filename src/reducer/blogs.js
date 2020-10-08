import { UPDATE_QUESTION } from "../action/actionTypes";

// reducer for search results
const initialSearchState = {
  result: [],
  tags: "",
  showSearchResults: false,
};
export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case UPDATE_QUESTION:
      return {
        ...state,
        result: action.blogs,
        tags: action.tags,
      };
    default:
      return state;
  }
}
