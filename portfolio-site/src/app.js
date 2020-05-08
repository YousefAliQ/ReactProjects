// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/style.scss';



ReactDOM.render(<AppRouter />, document.getElementById('app'));