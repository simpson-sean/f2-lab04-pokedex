import React, { Component } from 'react'
import PokeItems from './PokeItems';

export default class pokelist extends Component {

    render() {
        console.log(this.props.pokeDex);
        return (
            <div>
                hello
                {/* <select>
                    <option>Sort List</option>
                    <option>Sort Ascendeing</option>
                    <option>Sort Descending</option>
                </select> */}
                {
                    this.props.pokeDex.map( pokemon => {
                     return   <PokeItems name={pokemon.pokemon} />
                    }
                        )
                }
            </div>
        )
    }
}
