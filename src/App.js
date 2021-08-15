import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './footer'

import Home from './pages/home/home.component';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>

        <Footer/>
      </div>
    )
  }

}

export default App;