import updateFlowerList from './flower-list';
import updateShoppingCart from './shopping-cart';
import searchPanel from './search-panel'

const reducer = (state, action) => {
  return {
  	flowerList: updateFlowerList(state, action),
  	shoppingCart: updateShoppingCart(state, action),
  	searchPanel: searchPanel(state, action)
  };
};

export default reducer;