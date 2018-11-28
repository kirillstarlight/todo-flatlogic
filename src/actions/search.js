import { SEARCH_TODO } from "../constants";

export const searchTodo = e => ({
  type: SEARCH_TODO,
  payload: e.target.value
});
