import { getAllDocuments } from "../utils/API";

export const FETCH_DOCUMENTS = "FETCH_DOCUMENTS";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAIL = "FETCH_DOCUMENTS_FAIL";

function fetchingDocuments() {
  return {
    type: FETCH_DOCUMENTS
  };
}

function fetchDocumentsSuccess(documents) {
  return {
    type: FETCH_USERNAME_SUCCESS,
    documents
  };
}

function fetchDocumentsFail(error) {
  return {
    type: FETCH_DOCUMENTS_FAIL,
    error
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
