import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';

const App = () => (
  <div>
    <h1>Container!</h1>
    <hr />
    <MarketingApp />
  </div>
)

export default App;