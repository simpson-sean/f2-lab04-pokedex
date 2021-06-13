import React, { Component } from 'react'
import PokeItems from './PokeItems';

export default class PokeList extends Component {

    render() {
        return (
            <div>
                <select onChange={this.props.handleSort}>
                    <option value='default'>Sort List</option>
                    <option value='ascending'>Sort Ascending</option>
                    <option value='descending'>Sort Descending</option>
                </select>
                
                {
                    this.props.pokeDex.map( pokemon => {
                     return   <PokeItems pokemon={pokemon} key={pokemon.id} />
                    }
                        )
                }
            </div>
        )
    }
}
