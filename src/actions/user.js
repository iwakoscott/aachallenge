import { addUsernameToBrowser } from "../utils/API";

export const ADD_USERNAME_BROWSER = "ADD_USERNAME_BROWSER";

function addUsernameToStore(username) {
  return {
    type: ADD_USERNAME_BROWSER,
    username
  };
} // addUsernameToStore
