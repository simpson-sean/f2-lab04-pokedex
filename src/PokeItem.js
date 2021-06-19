import React, { Component } from 'react'


export default class PokeItem extends Component {

   
    render() {
        return (
            <div>
                
                    <div className='poke-card'>
                        <img src={this.props.pokemon.url_image} alt='pokemonImage' width='100px' height='100px' />
                        <p className='poke-name'>
                            Name: {this.props.pokemon.pokemon}<br></br>
                            Type: {this.props.pokemon.type_1}<br></br>
                            HP: {this.props.pokemon.hp}<br></br>
                            Speed: {this.props.pokemon.speed}<br></br>
                            Weight: {this.props.pokemon.weight}<br></br>
                         </p>
                    </div>
               
            </div>
        )
    }
}
