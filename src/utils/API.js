/*
  API logic for dealing with localstorage and the aachallenge backend will be
  stored here.
*/

const STORAGE_KEY = "THE:STORAGE_KEY";

export function addUsernameToBrowser(username) {
  // set username as a property of the object stored at STORAGE_KEY.
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      username
    })
  );
  return username;
} // addUsernameToBrowser
