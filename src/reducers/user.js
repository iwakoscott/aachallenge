import { ADD_USERNAME_TO_BROWSER } from "../actions/user";

const initialState = {
  username: ""
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ADD_USERNAME_TO_BROWSER:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
} // user
