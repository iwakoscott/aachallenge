import {
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAIL,
  FETCH_DOCUMENTS,
  SAVE_DOCUMENT_SUCCESS,
  SAVE_DOCUMENT_FAIL,
  SAVE_DOCUMENT
} from "../actions/documents";

const initialState = {
  isFetching: false,
  documents: {},
  error: null
};

export default function documents(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOCUMENTS:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case FETCH_DOCUMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        documents: action.documents
      };
    case FETCH_DOCUMENTS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case SAVE_DOCUMENT:
      return {
        ...state,
        error: null
      };
    case SAVE_DOCUMENT_SUCCESS:
      return {
        ...state,
        documents: {
          ...state.documents,
          ...action.document
        }
      };
    case SAVE_DOCUMENT_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
