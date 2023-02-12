import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';

import App from './App';

const mount = (el, { defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: ['/dashboard']
  });

  ReactDOM.render(
    <App history={history}/>,
    el
  )
};

if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#__stdaln-dashboard')

  if(el) {
    mount(el, {
      defaultHistory: createBrowserHistory()
    })
  }
}

export { mount };