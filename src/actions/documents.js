import { getAllDocuments, saveDocument } from "../utils/API";

export const FETCH_DOCUMENTS = "FETCH_DOCUMENTS";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAIL = "FETCH_DOCUMENTS_FAIL";

export const ADD_DOCUMENT = "ADD_DOCUMENT";
export const ADD_DOCUMENT_SUCCESS = "ADD_DOCUMENT_SUCCESS";
export const ADD_DOCUMENT_FAIL = "ADD_DOCUMENT_FAIL";

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
    type: ADD_DOCUMENT_SUCCESS,
    document
  };
}

function saveDocumentFail(error) {
  return {
    type: ADD_DOCUMENT_FAIL,
    error
  };
}

function savingDocument() {
  // for the sake of clearing error messages from the store
  return {
    type: ADD_DOCUMENT
  };
}

export function handleSaveDocument(document) {
  return dispatch => {
    dispatch(savingDocument()); // for the sake of clearing error messages in our store
    saveDocument(document)
      .then(result => dispatch(saveDocumentSuccess(result)))
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
