/*
  API logic for dealing with localstorage and the aachallenge backend will be
  stored here.
*/

// ======================= LOCALSTORAGE =======================

const STORAGE_KEY = "THE:STORAGE_KEY";

export function fetchUsername() {
  const storage = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(storage);
}

export function addUsernameToBrowser(username) {
  // set username as a property of the object stored at STORAGE_KEY.
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      username
    })
  );
  return username;
}

export function resetStorageUsername() {
  localStorage.removeItem(STORAGE_KEY);
}

// ======================= aachallenge BACKEND API =======================
export function getAllDocuments() {
  return fetch("https://aachallengeone.now.sh/read").then(response =>
    response.json()
  );
}

export function saveDocument({ title, content, username }) {
  const encodedTitle = encodeURI(title);
  return new Promise((resolve, reject) => {
    fetch(`https://aachallengeone.now.sh/read/${encodedTitle}`).then(
      response => {
        if (response.ok) {
          // Document exists reject promise with document from API.
          reject(response.json());
        } else {
          // Document does not already exists! resolve with a new document
          // object to be added to the store and pushed to our server.
          resolve({
            [encodedTitle]: {
              owners: [username],
              lastChangeBy: username,
              content
            }
          });
        }
      }
    );
  });
}
