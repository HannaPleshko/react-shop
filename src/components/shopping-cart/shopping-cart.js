import React from 'react';
import { connect } from 'react-redux';
import {
  flowerAddedToCart,
  flowerRemoveFromCart,
  allFlowersRemoveFromCart
} from '../../actions';
import './shopping-cart.css';

const ShoppingCart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}
          className="table-light">
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td className="actions">
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm">
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o" />
          </button>
        </td>
    </tr>
    );
  };

  return (
    <div>
      <h2>Purchases</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col" className="actions">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>
      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: {cartItems, orderTotal} }) => {
	return {
	  items: cartItems, 
	  total: orderTotal
	};
};

const mapDispatchToProps = {
  onIncrease: flowerAddedToCart,
  onDecrease: flowerRemoveFromCart,
  onDelete: allFlowersRemoveFromCart
};

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);