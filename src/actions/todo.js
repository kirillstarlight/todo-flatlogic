import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHANGE_PRIORITY
} from "../constants/index";

let nextTodoId = 5;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    content: content
  }
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  payload: id
});

export const changePriority = id => ({
  type: CHANGE_PRIORITY,
  payload: id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});
