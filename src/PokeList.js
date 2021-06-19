import React, { Component } from 'react'
import request from 'superagent';
import PokeSearch from './PokeSearch.js';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {

    // Set states for Pokemon, Query, Sort and Search  
state = {
    
    pokemon: [],
    query: '',
    direction: 'asc',
  
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
  
  handleSearch = () => {
    this.fetchData()    
 
  }
  
  // Sort ASC and DESC handler.
  handleSort = async (event) => {
    await this.setState({direction: event.target.value })
    this.fetchData();
    console.log(this.state.direction);

  }
  
  fetchData = async () => {
    const pokeDex = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.direction}`)
    this.setState({pokemon: pokeDex.body.results});
    console.log(pokeDex);
  
  }
  

    render() {

        return (
                <div>
                    <PokeSearch name="Search" handleChange={this.handleChange} handleClick={this.handleClick} search={this.handleSearch} />
                    
                        <select onChange={this.handleSort}>
                            <option value=''>Sort List</option>
                            <option value='asc'>Sort Ascending</option>
                            <option value='desc'>Sort Descending</option>
                        
                        </select>
                    <section className='poke-grid'>
                    {this.state.pokemon.map(pokemon => {
                        return   <PokeItem pokemon={pokemon} key={pokemon.id} />
                        
                        })
                    }
                    </section>
                </div>
        )
    }
}
