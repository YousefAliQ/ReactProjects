// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
    <div>
        I am dashboard!
    </div>
);

const AddExpensePage = () => (
    <div>
        I am the add!
    </div>
);

const EditExpensePage = () => (
    <div>
        I am the edit!
    </div>
);

const HelpPage = () => (
    <div>
        I am the help!
    </div>
);

const NotFoundPage = () => (
    <div>
        I am the 404! -- <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="isActive">Edit</NavLink>
        <NavLink to="/help" activeClassName="isActive">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));