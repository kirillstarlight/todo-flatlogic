import { ADD_TODO, SEARCH_TODO } from "../constants/index";

const initialState = [
  {
    id: 0,
    content: {
      name: "Task",
      description: "Todo list with priority",
      time: "28.11.2018"
    }
  }
];

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
