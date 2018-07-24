import {
  addUsernameToBrowser,
  fetchUsername,
  resetStorageUsername
} from "../utils/API";

export const FETCH_USERNAME_SUCCESS = "FETCH_USERNAME_SUCCESS";
export const RESET_USERNAME = "RESET_USERNAME";

function fetchUsernameSuccess(username) {
  return {
    type: FETCH_USERNAME_SUCCESS,
    username
  };
}

function resetUsername() {
  return {
    type: RESET_USERNAME
  };
}

export function getUsername() {
  //  get username and add to store
  return dispatch => {
    const { username } = fetchUsername() || { username: null };
    dispatch(fetchUsernameSuccess(username));
  };
}

export function handleAddUsernameToBrowser(username) {
  // add username to localstorage and store
  return dispatch => {
    addUsernameToBrowser(username);
    dispatch(fetchUsernameSuccess(username));
  };
}

export function handleResetUsername() {
  // reset the username in store and localstorage
  return dispatch => {
    resetStorageUsername();
    dispatch(resetUsername());
  };
}
