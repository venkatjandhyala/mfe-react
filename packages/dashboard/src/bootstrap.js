import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if(onNavigate)
    history.listen(onNavigate)

  ReactDOM.render(
    <App history={history}/>,
    el
  )
  
  return {
    onParentNavigate({pathname: nextPathname}) {
      const {pathname} = history.location;

      if(pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
};

if(process.env.NODE_END === 'development') {
  const el = document.querySelector('#__stdaln-dashboard')

  if(el) {
    mount(el, {
      defaultHistory: createBrowserHistory()
    })
  }
}

export {mount}