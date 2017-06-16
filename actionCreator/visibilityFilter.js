import actionTypes from '../constants/actionTypes';


export function setVisibilityFilter(visibilityFilter) {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    payload: visibilityFilter
  };
}
