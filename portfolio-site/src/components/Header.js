import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="isActive" exact={true}>Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="isActive">Contact</NavLink>
    </header>
);

export default Header;