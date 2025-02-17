// import { csrfFetch } from './csrf';

// // Action Types
// const SET_SESSION_USER = 'session/setSessionUser';
// const REMOVE_SESSION_USER = 'session/removeSessionUser';

// // Action Creators
// const setSessionUser = (user) => ({
//   type: SET_SESSION_USER,
//   payload: user,
// });

// const removeSessionUser = () => ({
//   type: REMOVE_SESSION_USER,
// });

// // Thunk Action: Login
// export const login = ({ credential, password }) => async (dispatch) => {
//   const response = await csrfFetch('/api/session', {
//     method: 'POST',
//     body: JSON.stringify({ credential, password }),
//   });

//   const data = await response.json();
//   dispatch(setSessionUser(data.user));
//   return response;
// };

// // Initial State
// const initialState = { user: null };

// // Reducer
// const sessionReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_SESSION_USER:
//       return { ...state, user: action.payload };
//     case REMOVE_SESSION_USER:
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// };

// export default sessionReducer;

import { csrfFetch } from './csrf';

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password
    })
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
