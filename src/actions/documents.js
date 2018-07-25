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

function saveDocumentFail(error) {
  return {
    type: SAVE_DOCUMENT_FAIL,
    error
  };
}

function savingDocument() {
  // for the sake of clearing error messages from the store
  return {
    type: SAVE_DOCUMENT
  };
}

export function handleSaveDocument(document) {
  return (dispatch, getState) => {
    dispatch(savingDocument()); // for the sake of clearing error messages in our store
    saveDocument(document)
      .then(result => {
        const [slug] = Object.keys(result);
        const { user, documents } = getState();
        const documentUpdates = result[slug];
        const { username } = user;
        const { documents: _documents } = documents;
        const originalDoc = _documents[slug];

        const objectToDispatch =
          typeof originalDoc !== "undefined"
            ? {
                [slug]: {
                  ...originalDoc,
                  ...documentUpdates,
                  owners: originalDoc.owners.includes(username)
                    ? originalDoc.owners
                    : [...originalDoc.owners, username]
                }
              }
            : {
                [slug]: {
                  ...documentUpdates,
                  owners: [username]
                }
              };

        dispatch(saveDocumentSuccess(objectToDispatch));
      })
      .catch(() => dispatch(saveDocumentFail(`Error adding document!`)));
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
