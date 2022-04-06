import React from 'react';
import { Link } from 'react-router-dom';
import './flower-list-item.css';

const FlowerListItem = ({ flower, onAddedToCart }) => {
  const { name, price, coverImage } = flower;

  return (
  	<div className="card mb-3">
      <h3 className="card-header">{name}</h3>
        <div className="card-body">
          <h5 className="card-title">{`Price: ${price}$`}</h5>
        </div>
        <img src={coverImage} alt="Cart"/>
        <div className="double-buttons">
        <button 
            className="btn btn-secondary"
            onClick={onAddedToCart}>
            Add to cart
          </button>
        <Link to="/cart">
          <i className="cart-icon fa fa-shopping-cart" />
        </Link>
        </div>
    </div>
  );
};

export default FlowerListItem;