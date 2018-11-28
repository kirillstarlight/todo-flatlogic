import { ADD_TODO, SEARCH_TODO } from "../constants/index";

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
    case SEARCH_TODO:
      return [...state.filter(card => card.name.includes(action.payload))];
    default:
      return [...state];
  }
};

export default reducer;
