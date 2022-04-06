import React, { Component } from 'react';
import { connect } from 'react-redux';
import withFlowestoreService from '../hoc';
import FlowerListItem from '../flower-list-item';
import Spinner from '../spinner';
import ErrorIndiactor from '../error-indicator';
import { fetchFlowers, flowerAddedToCart, setFilter, setSearchQuery} from '../../actions';

import SearchPanel from '../search-panel';

import './flower-list.css';

const FlowerList = ({ flowers, onAddedToCart }) => {
  return (
  	flowers.map((flower) => {
  	  return <FlowerListItem 
               flower={flower}
               key={flower.id}
  	  		     onAddedToCart={() => onAddedToCart(flower.id)} 
  	  		   />
  	})
  );
};

class FlowerListContainer extends Component {
  componentDidMount() {
  	this.props.fetchFlowers();
  }

  render() {
  	const { flowers, 
            loading,
            error, 
            onAddedToCart, 
            onFilterChange, 
            onSearchChange,
            search
          } = this.props;

  	if (loading) {
  	  return <Spinner />
  	}

  	if (error) {
  	  return <ErrorIndiactor />
  	}

  	return (
      <div>
        <SearchPanel
          onFilterChange={onFilterChange}
          onSearchChange={onSearchChange}
          search={search}
          />

        <div className="flower-card">
          <FlowerList 
            flowers={flowers}
  			    onAddedToCart={onAddedToCart}
          />
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ flowerList: { loading, error, flowers },
                           searchPanel: { flowersFiltred, filterBy, searchQuery} }) => {
  return { 
    loading: loading,
    error: error,
    flowers: flowersFiltred || flowers,
    filter: filterBy,
    search: searchQuery
 };
};

const mapDispatchToProps = (dispatch, {flowerstoreService}) => {
  return {
      fetchFlowers: fetchFlowers(flowerstoreService, dispatch),
      onAddedToCart: (id) => dispatch(flowerAddedToCart(id)),
      onFilterChange: (filter) => dispatch(setFilter(filter)),
      onSearchChange: (search) => dispatch(setSearchQuery(search))
  };
};

export default withFlowestoreService()(connect(mapStateToProps, mapDispatchToProps)(FlowerListContainer));