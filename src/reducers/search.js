import { SEARCH_TODO } from "../constants/index";

const initialState = { text: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TODO:
      return { text: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
