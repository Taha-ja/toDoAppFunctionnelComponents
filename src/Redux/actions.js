import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
} from "./Constant";
import {
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  POST_TODO_FAIL,
} from "./Constant";
import {
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from "./Constant";
import axios from "axios";
export const GetTodosAction = () => async (dispatch) => {
  try {
    //dispatch for reducer to return loading :true
    dispatch({ type: GET_TODOS_REQUEST });
    const { data } = await axios.get("http://localhost:3000/todos");
    //dispatch for reducer to return Data in store
    dispatch({ type: GET_TODOS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_TODOS_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const PostTodoAction = (todo) => async (dispatch) => {
  try {
    dispatch({ type: POST_TODO_REQUEST });

    const { data } = await axios.post("http://localhost:3000/todos", todo);

    dispatch({ type: POST_TODO_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: POST_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const DeleteTodoAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TODO_REQUEST });
    await axios.delete(`http://localhost:3000/todos/${id}`);
    dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
    console.log(id);
  } catch (error) {
    dispatch({
      type: DELETE_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
