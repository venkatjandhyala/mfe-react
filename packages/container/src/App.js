import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <MarketingApp />
    </div>
  </BrowserRouter>
)

export default App;