// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
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
const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        
            </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));