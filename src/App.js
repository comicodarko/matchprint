import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import GlobalStyles from './styles/global';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function App() {

  return ( 
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/contato" component={Contact}/>
          <Route path="/" exact component={Home}/>
          <Route component={Home} />
        </Switch>
      </Router>
    </>
  )
}