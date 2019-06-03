import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PEDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
  
}

export const requestRobots = () => (dispatch) => {  // a higher order function: a function that returns a function.
  dispatch({ type: REQUEST_ROBOTS_PEDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
// If we request robots it's going to notice that it's a function, it's going to go into the middleware, and redux-thunk just DISPATCH pending to the REDUCER, and when it will be done with the promise then it's going to DISPATCH the success, go through the REDUCER, update the STORE and make changes. So:

// Action -> Thunk(DISPATCH pending) -> Reducer -> Store -> make changes
// and whe will be the promise then
// Action -> Thunk(DISPATCH success) -> Reducer -> Store -> make changes