/*
  API logic for dealing with localstorage and the aachallenge backend will be
  stored here.
*/

const STORAGE_KEY = "SCOTTS:STORAGE_KEY";

export function addUsernameToBrowser(username) {
  return localstorage.getItem(STORAGE_KEY).then(result => console.log(result));
}
