import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


import App from './components/app';
import SearchBar from './components/search_bar';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<LocaleProvider locale={enUS}>
	  <Provider store={createStoreWithMiddleware(reducers)}>
	    <SearchBar />
	  </Provider>
  </LocaleProvider>
  , document.querySelector('.container'));
