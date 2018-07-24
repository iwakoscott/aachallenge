import { FETCH_USERNAME_SUCCESS, RESET_USERNAME } from "../actions/user";

const initialState = {
  username: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERNAME_SUCCESS:
      return {
        ...state,
        username: action.username
      };
    case RESET_USERNAME:
      return {
        ...state,
        username: null
      };
    default:
      return state;
  }
} // user
