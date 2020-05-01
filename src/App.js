import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AdoptionPage from './pages/AdoptionPage';
import AnimalPage from './pages/AnimalPage';
import AnimalDetail from './pages/AnimalDetail';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutUsPage} />
        <Route exact path="/adoption" component={AdoptionPage} />
        <Route exact path="/animals" component={AnimalPage} />
        <Route exact path="/animals/:animalId" component={AnimalDetail} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
