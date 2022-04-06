const updateCartItems = (cartItems, item, idx) => {
  
  if (item.count === 0) {
    
  	return [
          ...cartItems.slice(0, idx),
          ...cartItems.slice(idx + 1)
        ]
  }

  if(idx === -1) {

  	return [
          ...cartItems,
          item
        ]
  }

  return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1)
    ]
};

const updateCartItem = (flower, item = {}, quantity) => {
  const {
  	id = flower.id,
  	count = 0,
  	name = flower.name,
  	total = 0
  } = item;

  return {
  	id,
  	name,
  	count: count + quantity,
  	total: total + quantity*flower.price,
  };
};


const updateOrder = (state, flowerId, quantity) => {
  const {flowerList: {flowers}, shoppingCart: {cartItems}} = state;

  const flower = flowers.find(({id}) => id === flowerId);
  const itemIndex = cartItems.findIndex(({id}) => id === flowerId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(flower, item, quantity);

  
  return {
  	cartItems: updateCartItems(cartItems, newItem, itemIndex),
    numItems: updateCartItems(cartItems, newItem, itemIndex)
      .reduce((count, item) => count + item.count, 0),
    orderTotal: updateCartItems(cartItems, newItem, itemIndex)
      .reduce((total, item) => total + item.total, 0)
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
  	return {
  	  cartItems: [],
      numItems: 0,
      orderTotal: 0
  	}
  }

  switch(action.type) {
  	case 'FLOWER_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

  	case 'FLOWER_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

  	case 'ALL_FLOWERS_REMOVE_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
  	  return updateOrder(state, action.payload, -item.count)
  	
  	default:
  	  return state.shoppingCart;
  }
};

export default updateShoppingCart;