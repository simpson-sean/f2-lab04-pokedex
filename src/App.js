import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import './App.css';

import Header from './Header.js';
import Home from './Home.js';
import PokeList from './PokeList';
import PokeDetail from './PokemonDetail.js';





export default class App extends Component {

    render() {
      return (
        <BrowserRouter>
          <div className="App-header">
            <Header />           
            <Switch>
              <Route path="/"  exact component={Home} />
              <Route path="/pokemon" exact component={PokeList} />
              <Route path="/pokemon/:pokeid" exact component={PokeDetail} />
            </Switch>
          </div>
        </BrowserRouter>
        );
      }
}