import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHANGE_PRIORITY
} from "../constants/index";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    content: content
  }
});
