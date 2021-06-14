import React, { Component } from 'react'


export default class PokeItems extends Component {

   
    render() {
        return (
            <div>
                <div className='poke-list'>
                    
                    <p className='poke-card'>
                        Name: {this.props.pokemon.pokemon}
                    <img src={this.props.pokemon.url_image} alt='pokemonImage' width='200px' height='200px' />
                    </p>
                </div> 
            </div>
        )
    }
}
