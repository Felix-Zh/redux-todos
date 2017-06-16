
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './containers/Main';


const render = (Component) => {
  ReactDom.render(
    <Provider store={store} >
      <Component />
    </Provider>,
    document.getElementById('app')
  );
};

render(Main);
