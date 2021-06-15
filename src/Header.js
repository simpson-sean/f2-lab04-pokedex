import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                
                <div className='title'>
                    Pokedex
                </div>
            
                <div className='links'>
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/pokemon" exact className="nav-link">Search Index</NavLink>
                </div>

            </div>
        )
    }
}
