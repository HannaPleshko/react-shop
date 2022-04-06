import React from 'react';
import { FlowerstoreServiceConsumer } from '../flowerstore-service-context';

const withFlowestoreService = () => (Wrapped) => {
  return (props) => {
  	return (
  	  <FlowerstoreServiceConsumer>
  	    {
  	      (flowerstoreService) => {
  	      	return (<Wrapped {...props}
  	      		     flowerstoreService={flowerstoreService} />);
  	      }
  	    }
  	  </FlowerstoreServiceConsumer>
  	);
  }
};

export default withFlowestoreService;