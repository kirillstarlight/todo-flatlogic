import {
  ADD_TODO,
  CHANGE_PRIORITY,
  COMPLETE_TODO,
  DELETE_TODO
} from "../constants/index";

const initialState = [
  {
    id: 0,
    content: {
      name: "Task",
      description: "Todo list with priority",
      time: "28.11.2018",
      priority: true
    },
    isComplete: true
  },
  {
    id: 1,
    content: {
      name: "Coursework",
      description: "test",
      time: "28.12.2018",
      priority: false
    },
    isComplete: false
  },
  {
    id: 2,
    content: {
      name: "Test",
      description: "test",
      time: "29.12.2018",
      priority: true
    },
    isComplete: false
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          content: action.payload.content,
          isComplete: false
        }
      ];
    case CHANGE_PRIORITY:
      state.forEach(card => {
        if (card.id == action.payload) {
          console.log(card);
          let isPriority = card.content.priority;
          card.content.priority = !isPriority;
        }
      });
      return [...state];
    case DELETE_TODO:
      console.log(action.payload);
      state.filter(card => card.id === action.payload);
      return [...state];
    case COMPLETE_TODO:
      state.forEach(card => {
        if (card.id == action.payload) {
          card.isComplete = true;
        }
      });
      return [...state];
    default:
      return [...state];
  }
};

export default reducer;
