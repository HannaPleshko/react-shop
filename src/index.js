import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import FlowerstoreService from './services/flowerstore-service';
import { FlowerstoreServiceProvider } from './components/flowerstore-service-context';
import store from './store';

const flowerstoreService = new FlowerstoreService();

ReactDOM.render (
  <Provider store={store}>
    <ErrorBoundry>
      <FlowerstoreServiceProvider value={flowerstoreService}>
        <Router>
          <App />
        </Router>
      </FlowerstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);