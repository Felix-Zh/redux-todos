import actionTypes from '../constants/actionTypes';


export function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    payload: text
  };
}

export function toggleTodo(index) {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: index
  };
}
