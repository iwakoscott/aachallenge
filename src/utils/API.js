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
  return fetch("https://aachallengeone.now.sh/read");
}

export function saveDocument(document) {
  return fetch("https://aachallengeone.now.sh/update", {
    method: "POST",
    body: JSON.stringify(document)
  });
}
