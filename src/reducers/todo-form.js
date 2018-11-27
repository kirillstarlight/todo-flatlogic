import { ADD_TODO } from "../constants/index";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          content: action.payload.content
        }
      ];
    default:
      return [...state];
  }
};

export default reducer;
