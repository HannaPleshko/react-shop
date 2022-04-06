const filterByPrice = (flowers, filterType) => {

  switch (filterType) {
  case 'all':
      return {
        newFlowers: undefined
      };

    case 'lower_price':
      return {
        newFlowers: flowers.sort((a, b) => {
                   return a.price - b.price}),
        filter: filterType
      };
     
    case 'higher_price':
      return {
        newFlowers: flowers.sort((a, b) => {
                   return b.price - a.price}),
        filter: filterType
      };

    default:
      return {
        newFlowers: flowers
      };     
  }
};

const filterByQuery = (flowers, searchQuery) => {
  if (searchQuery === undefined) {
    return flowers;
  }
  
  const newFlowers = flowers.filter((flower) => {
    return flower.name
                 .toLowerCase() 
                 .indexOf(searchQuery.toLowerCase()) > -1;
  });
  return newFlowers;
};

const filterAll = (flowers, filterType, searchQuery) => {

  const { newFlowers, filter } = filterByPrice(filterByQuery(flowers, searchQuery), filterType);
  return {
    flowersFiltred: newFlowers,
    filterBy: filter,
    searchQuery: searchQuery
  }
};

const searchPanel = (state, action) => {
  
  if (state === undefined) {
    return {}
  };

  const { searchPanel: {searchQuery, filterBy}, flowerList: {flowers} } = state;

  switch (action.type) {
    case 'SET_FILTER':
      return filterAll(flowers, action.payload, searchQuery);
    
    case 'SET_SEARCH_QUERY':
      return filterAll(flowers, filterBy, action.payload);
    
    default:
      return state.searchPanel;
  }
};

export default searchPanel;