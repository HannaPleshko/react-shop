import React from 'react';
import './search-panel.css';

const SearchPanel = ({ onFilterChange, search, onSearchChange }) => {

  return (
  	<div className="search-container">
      <button type="button"
              className="btn btn-outline-primary"
              onClick={() => onFilterChange('all')} 
              >
              All
      </button>      
      <button type="button"
              className="btn btn-outline-primary"
              onClick={() => onFilterChange('lower_price')} 
              >
              Lower price
      </button>
      <button type="button"
              className="btn btn-outline-primary"
              onClick={() => onFilterChange('higher_price')} 
              >
              Higher price
      </button>


  	  <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" 
               type="text" 
               placeholder="Search" 
               onChange={e => onSearchChange(e.target.value)}
               value={search}
        />
      </form>
  	</div>
  );
};

export default SearchPanel;