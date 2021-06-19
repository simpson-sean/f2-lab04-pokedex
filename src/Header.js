import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='poke-header'>Pokedex</div>
                <div className='header-links'>
                    <NavLink className='nav-links' exact to="/">Home</NavLink>
                    <NavLink className='nav-links' exact to="/pokemon">Search</NavLink>
                </div>
            </div>
        )
    }
}
