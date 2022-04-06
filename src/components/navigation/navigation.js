import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navigation.css';

const Navigation = ({ amount, total }) => {
  return (
  	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to='/'>
        <div className="navbar-brand">Galina Flowers Shop</div>
      </Link>
      <Link to="/catalog" className="nav-item nav-link">
        <div>Catalog</div>
      </Link>
      <Link to='/cart' className="nav-item nav-link">
        <div>
          {amount} Purchases
          <i className="cart-icon fa fa-shopping-cart" />
          {total}
        </div>
      </Link>
    </nav>
  );
};

class NavigationContainer extends Component {
  render() {
    const { amount, total } = this.props;
    
    if (amount !== 0) {
      return (
        <div>
          <Navigation
            amount={amount}
            total={` (${total}$)`}
          />
        </div>
      )
    }

    return (
      <div>
        <Navigation />
      </div>      
    )
  }
};

const mapStateToProps = ({ shoppingCart: {numItems, orderTotal} }) => {
  return {
    amount: numItems,
    total: orderTotal
  }
};

export default connect(mapStateToProps)(NavigationContainer);
