import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import UserPage from '../../pages/UserPage/UserPage';

import './Main.css';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:id' component={UserPage} />
            </Switch>
        </main>
    );
}

export default Main;