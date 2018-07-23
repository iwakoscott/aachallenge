import { addUsernameToBrowser } from "../utils/API";

export const ADD_USERNAME_TO_BROWSER = "ADD_USERNAME_TO_BROWSER";

function addUsernameToStore(username) {
  return {
    type: ADD_USERNAME_TO_BROWSER,
    username
  };
} // addUsernameToStore
