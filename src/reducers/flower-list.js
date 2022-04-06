const updateFlowerList = (state, action) => {
  if (state === undefined) {
  	return {
  	  flowers: [],
  	  loading: true,
  	  error: null
  	};
  }

  switch (action.type) {
  	case 'FETCH_FLOWERS_REQUEST':
  	  return {
  	  	flowers: [],
  	  	loading: true,
  	  	error: null
  	  };

  	case 'FETCH_FLOWERS_SUCCESS':
  	  return {
  	  	flowers: action.payload,
  	  	loading: false,
  	  	error: null
  	  };

  	case 'FETCH_FLOWERS_FAILURE':
  	  return {
  	  	flowers: [],
  	  	loading: false,
  	  	error: action.payload,
  	  };

  	default:
  	  return state.flowerList;
  }
};

export default updateFlowerList;