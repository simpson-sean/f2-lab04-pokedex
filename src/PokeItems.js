import React, { Component } from 'react'


export default class PokeItems extends Component {

   
    render() {
        return (
            <div>
                hey
                <div className='poke-list'>
                    
                    <p>
                        hey
                        Name: {this.props.name}
                    </p>
                    
                </div> 
            </div>
        )
    }
}
