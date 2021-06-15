import React, { Component } from 'react'
import request from 'superagent';

import PokeSearch from './PokeSearch.js';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {

    // Set states for Pokemon, Query, Sort and Search  
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
  
  handleSearch = async () => {
    const searchQuery = `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`;
    const searchResults = await request.get(searchQuery);
    
    
    if (searchResults.body.results.length === 0 ) {
      
      window.alert('No Results Found.')
    
    } else {
      this.setState({pokemon: searchResults.body.results});
  
    }
  }
  
  // Sort ASC and DESC handler.
  handleSort = (event) => {
    
    let sorted = [];
  
    if (event.target.value === 'ascending') {
      sorted = this.state.pokemon.sort((a,b) => (a.pokemon > b.pokemon) ? 1 : ((b.pokemon > a.pokemon) ? -1 : 0));
      
    
    } else if (event.target.value === 'descending') {
      sorted = this.state.pokemon.sort((a,b) => (a.pokemon > b.pokemon) ? -1 : ((b.pokemon > a.pokemon) ? 1 : 0));
    
    }
    
    this.setState({searchResults: sorted})
    
  }
  
  fetchData = async () => {
    const pokeDex = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')
    this.setState({pokemon: pokeDex.body.results});
    console.log(pokeDex);
  
  }
  

    render() {

        return (
            <div>
                <div>
                    <PokeSearch name="Search" handleChange={this.handleChange} handleClick={this.handleClick} search={this.handleSearch} />
                    
                        <select onChange={this.handleSort}>
                            <option value='default'>Sort List</option>
                            <option value='ascending'>Sort Ascending</option>
                            <option value='descending'>Sort Descending</option>
                        
                        </select>
                    
                    {this.state.pokemon.map(pokemon => {
                        return   <PokeItem pokemon={pokemon} key={pokemon.id} />
                        
                        })
                    }
                </div>
            </div>
        )
    }
}
