import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (rops) => (
    <div>
        <p>I am Portfolio!!</p>
        <Link to='/portfolio/1'>I'm One</Link>
        <Link to='/portfolio/2'>I'm Two</Link>
        <Link to='/portfolio/3'>I'm Three</Link>
    </div>
);

export default Portfolio;