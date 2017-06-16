import actionTypes from 'constants/actionTypes';


const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, { text: action.payload, completed: false }];
    case actionTypes.TOGGLE_TODO:
      return state.map((todo, idx) => {
        if (idx === action.payload) {
          return Object.assign(todo, { completed: !todo.completed });
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
