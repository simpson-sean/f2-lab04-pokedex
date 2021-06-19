import React, { Component } from 'react'
import request from 'superagent';


export default class PokemonDetail extends Component {

    state = {
        pokeDetail: {},
        loading: false,
    };

    componentDidMount(){
        this.fetchDetail();
    };

    fetchDetail = async () => {
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.pokeid}`);

    }



    render() {
        return (
            <div>
                <h2> Pokemon Details</h2>
                <h3>{this.props.match.params.pokeid}</h3>
                <h3>{this.state.pokeDetail.pokemon}</h3>
            </div>
        )
    }
}
