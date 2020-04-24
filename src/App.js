import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
