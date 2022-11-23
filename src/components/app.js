import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path=""></Route>
            </Switch>
          </div>
        </Router>
        
        <h1>Deion Gonzalez Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />

      </div>
    );
  }
}
