import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  POST_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from "./Constant";
// import { POST_TODO_REQUEST, POST_TODO_SUCCESS, POST_TODO_FAIL } from './Constant';
// import { DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAIL } from './Constant';

export const REDUCER_TODO = (state = { todos: [] }, action) => {
  switch (action.type) {
    case POST_TODO_REQUEST:
    case GET_TODOS_REQUEST:
    case DELETE_TODO_REQUEST:
      return { ...state };

    case GET_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case POST_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };

    case POST_TODO_FAIL:
    case GET_TODOS_FAIL:
    case DELETE_TODO_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
