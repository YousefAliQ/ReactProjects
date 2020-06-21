import React from 'react'

import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Blog } from '../Pages/Blog';
import { Introduction } from '../Pages/Introduction';
import { Projects } from '../Pages/Projects';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function Routes() {
    return (
        <div>
            <Router>
                <div >
                    <nav>
                        <ul>
                            <li>
                                <Link to="/"> Home </Link>
                            </li>
                            <li>
                                <Link to="/introduction"> Introduction </Link>
                            </li>
                            <li>
                                <Link to="/projects"> Projects </Link>
                            </li>
                            <li>
                                <Link to="/blog"> Blog </Link>
                            </li>
                            <li>
                                <Link to="/about"> About </Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/introduction">
                            <Introduction />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}


