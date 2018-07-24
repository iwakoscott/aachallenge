import { FETCH_DOCUMENTS_SUCCESS } from "../actions/documents";

const filterDocuments = store => next => action => {
  // grab the currently logged in user
  const { username } = store.getState().user;
  // if we dispatch a successful fetching of documents we want to filter
  // through each one and only return those that are relevant to the user above
  if (action.type === FETCH_DOCUMENTS_SUCCESS) {
    const _documents = action.documents;
    action.documents = Object.keys(_documents).reduce((acc, cur) => {
      const { owners } = _documents[cur];
      if (owners.includes(username)) {
        acc[cur] = _documents[cur];
      }
      return acc;
    }, {});
  }

  return next(action);
};

export default filterDocuments;
