const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: filter
  };
};

const setSearchQuery = (query) => {
  return {
    type: 'SET_SEARCH_QUERY',
    payload: query
  };
};

export {
  setFilter,
  setSearchQuery,
};