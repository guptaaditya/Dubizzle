import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//Import the components to be loaded on routes
import Container from '../components/container/'
import NotFound from '../components/default/'
import Home from '../components/home/'
import Fork from '../components/fork/'

export class RoutesList extends Component{
  render(){
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:fork_id" component={Fork} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default RoutesList
