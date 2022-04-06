const flowerAddedToCart = (flowerId) => {
  return {
    type: 'FLOWER_ADDED_TO_CART',
    payload: flowerId
  };
};

const flowerRemoveFromCart = (flowerId) => {
  return {
    type: 'FLOWER_REMOVED_FROM_CART',
    payload: flowerId
  };
};

const allFlowersRemoveFromCart = (flowerId) => {
  return {
    type: 'ALL_FLOWERS_REMOVE_FROM_CART',
    payload: flowerId
  };
};

export {
  flowerAddedToCart,
  flowerRemoveFromCart,
  allFlowersRemoveFromCart
};