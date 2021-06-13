import request from 'superagent';
import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList.js';
import PokeSearch from './PokeSearch.js';
//import PokeItems from './PokeItems.js';


export default class App extends Component {

state = {
  pokemon: [],
  query: '',
  sort: '',
  searchResults: [],

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

handleSearch = async () => {
  const searchQuery = `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`;
  this.setState({query: searchQuery});
  const searchResults = await request.get(searchQuery);
  
  
  if (searchResults.body.results.length === 0 ) {
    
    window.alert('No Results Found.')
  
  } else {
    this.setState({searchResults: searchResults.body.results});

  }
}

handleSort = (event) => {

  console.log(event.target.value);
  
  let sorted = [];

  if (event.target.value === 'ascending') {
    sorted = this.state.searchResults.sort((a,b) => (a.pokemon > b.pokemon) ? 1 : ((b.pokemon > a.pokemon) ? -1 : 0));
    
  
  } else if (event.target.value === 'descending') {
    sorted = this.state.searchResults.sort((a,b) => (a.pokemon > b.pokemon) ? -1 : ((b.pokemon > a.pokemon) ? 1 : 0));
  
  }
  
  this.setState({searchResults: sorted})
  
}

fetchData = async () => {
  const pokeDex = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')
  this.setState({pokemon: pokeDex.body.results});

}


 

render() {
  let pokemonsToDisplay = this.state.searchResults.length > 0 ? this.state.searchResults : this.state.pokemon
  
  return (
    <div className="App">
      
      <PokeSearch name="Search" handleChange={this.handleChange} handleClick={this.handleClick} search={this.handleSearch} />
      <PokeList pokeDex={pokemonsToDisplay} handleSort={this.handleSort} />
    </div>
    );
  }
}