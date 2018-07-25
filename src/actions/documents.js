import { getAllDocuments, saveDocument } from "../utils/API";

export const FETCH_DOCUMENTS = "FETCH_DOCUMENTS";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAIL = "FETCH_DOCUMENTS_FAIL";

export const SAVE_DOCUMENT = "SAVE_DOCUMENT";
export const SAVE_DOCUMENT_SUCCESS = "SAVE_DOCUMENT_SUCCESS";
export const SAVE_DOCUMENT_FAIL = "SAVE_DOCUMENT_FAIL";

function fetchingDocuments() {
  return {
    type: FETCH_DOCUMENTS
  };
}

function fetchDocumentsSuccess(documents) {
  return {
    type: FETCH_DOCUMENTS_SUCCESS,
    documents
  };
}

function fetchDocumentsFail(error) {
  return {
    type: FETCH_DOCUMENTS_FAIL,
    error
  };
}

function saveDocumentSuccess(document) {
  return {
    type: SAVE_DOCUMENT_SUCCESS,
    document
  };
}

function savingDocument() {
  // for the sake of clearing error messages from the store
  return {
    type: SAVE_DOCUMENT
  };
}

export function handleSaveDocument(document, { error, success }) {
  return (dispatch, getState) => {
    dispatch(savingDocument()); // for the sake of clearing error messages in our store

    // saveDocument resolves => This means that the document is OK to be saved as original doc.

    // saveDocument rejects => This means that the document already exists and we need to pivot accordingly.
    const { username } = getState().user;
    const encodedTitle = encodeURI(document.title);

    saveDocument(document) // attempt to save document
      .then(doc => dispatch(saveDocumentSuccess(doc))) // document doesn't exist on server
      .catch(response =>
        response.then(doc =>
          dispatch(
            saveDocumentSuccess({
              [encodedTitle]: {
                ...doc,
                owners: doc.owners.includes(username)
                  ? doc.owners
                  : [...doc.owners, username],
                lastChangeBy: username,
                content: document.content
              }
            })
          )
        )
      ) // document does exists on server. Merge updated document with existing document
      .finally(() => {
        fetch(`https://aachallengeone.now.sh/update/${encodedTitle}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            issuer: username,
            content: document.content
          })
        }).then(response => {
          if (response.ok) {
            success();
          } else {
            error();
          }
        });
      }); // finally push the new changes (both new document or old documents w/ updates)  to server
  };
}

export function handleFetchingDocuments() {
  return dispatch => {
    dispatch(fetchingDocuments());
    getAllDocuments()
      .then(documents => dispatch(fetchDocumentsSuccess(documents)))
      .catch(() => dispatch(fetchDocumentsFail(`Error fetching documents!`)));
  };
}
