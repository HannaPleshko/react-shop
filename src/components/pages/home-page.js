import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../images/1.JPG';
import './pages.css';

const HomePage = () => {
  return (
  	<div className="jumbotron">
      <h1 className="display-3">Welcome to Galina flowers shop!</h1>
      <p className="lead">Dear friends, thank You for visiting our shop. Here You will find various flowers and can choose your favorite composition.</p>
      <hr className="my-4" />
      <p>Visit our catalog to get acquainted with the assortment and prices.</p>
      <p className="lead">
        <img src={banner} alt="banner" />
        <Link to="/catalog">
          <button className="btn btn-primary btn-lg">See more</button>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;