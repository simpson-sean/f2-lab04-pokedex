import request from 'superagent';
import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList.js';
//import PokeItems from './PokeItems.js';


export default class App extends Component {

state = {
  pokemon: [],
  query: '',
  sort: '',

}

componentDidMount = async () => {
  await this.fetchData();

}

handleClick = async (e) => {
  await this.fetchData();
}

handleChange = (e) => {
  this.setState({query: e.target.value});

}

fetchData = async () => {
  const pokeDex = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')
  console.log('hello there!');
  console.log(pokeDex);
  this.setState({pokemon: pokeDex.body.results});

}


 

render() {
 
  console.log(this.state);

  return (
    <div className="App">
      <input onChange={this.handleChange} />
      <button onClick={this.handleClick}>Fetch!</button>

      {/* <PokeItems /> */}
      <PokeList pokeDex={this.state.pokemon} />
    </div>
    );
  }
}