import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/app';
import store from './store';
import services from './services'
import { ServicesProvider } from './components/services-context';


const deezerService = new services();

ReactDOM.render(
  <ServicesProvider value={deezerService}>
    <Provider store={store}>
      <App />
    </Provider>
  </ServicesProvider>
  , document.getElementById('root'));
