import {
  FETCH_USERNAME_SUCCESS,
  FETCH_DOCUMENTS_FAIL,
  FETCH_DOCUMENTS
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
    case FETCH_USERNAME_SUCCESS:
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
    default:
      return state;
  }
}
