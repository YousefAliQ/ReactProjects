import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';
import Portfolio from '../components/Portfolio';
import PortfolioDetails from '../components/PortfolioDetails';
import HomePage from '../components/HomePage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/portfolio' component={Portfolio} exact={true}/>
                <Route path='/portfolio/:id' component={PortfolioDetails}/>
                <Route path='/contact' component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;