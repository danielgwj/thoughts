import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './footer'

import Home from './pages/home/home.component';
import RandomThought from './pages/random-thought/random-thought.component';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/randomthought' component={RandomThought} /> 
        </Switch>
        <Footer/>
      </div>
    )
  }

}

export default App;