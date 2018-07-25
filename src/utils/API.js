import slugify from "slugify";
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
  const body = {
    issuer: username,
    content
  };

  const sluggedTitle = slugify(title, {
    replacement: "-",
    remove: /[$*_+~,.()'"!\-:@]/g,
    lower: true
  });

  return fetch(`https://aachallengeone.now.sh/update/${sluggedTitle}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(() => ({
    [sluggedTitle]: {
      owners: [username],
      lastChangeBy: username,
      content
    }
  }));
}
