import React, { Component } from 'react';


import PropTypes from 'prop-types';

const Name = (props) => {
    return(
        <div className='name'>
                <h1>{props.name}</h1>
        </div>
    );
}

Name.PropTypes = {
    name: PropTypes.string.isRequired
}

const Menu = (props) => {
    return(
        <div className='menu'>
            <a 
                id="menu"
                onClick={props.onHamburgerClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
                </svg>
            </a>
        </div>
    );
}

Menu.PropTypes = {
    onHamburgerClick: PropTypes.func.isRequired
}

const Header = (props) => {
    return(
        <div className='header'>
            <Menu
                onHamburgerClick={props.onHamburgerClick}/>
            <Name name={props.heading}/>    
        </div>
    );
}

Header.PropTypes = {
    heading: PropTypes.string.isRequired,
    onHamburgerClick: PropTypes.func.isRequired
}

export default Header;