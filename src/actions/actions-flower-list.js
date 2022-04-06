const flowerRequested = () => {
  return {
  	type: 'FETCH_FLOWERS_REQUEST'
  };
};

const flowersLoaded = (newFlowers) => {
  return {
  	type: 'FETCH_FLOWERS_SUCCESS',
  	payload: newFlowers
  };
};

const flowersError = (error) => {
  return {
  	type: 'FETCH_FLOWERS_FAILURE',
  	payload: error
  };
};

const fetchFlowers = (flowerstoreService, dispatch) => () => {
  dispatch(flowerRequested());
  flowerstoreService.getFlowers()
    .then((data) => dispatch(flowersLoaded(data)))
    .catch((err) => dispatch(flowersError(err)));
};

export default fetchFlowers;