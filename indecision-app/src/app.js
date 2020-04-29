// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};

ReactDOM.render((
    <Layout>
        <div>
            <h1>Title</h1>
            <p>I am paragraph</p>
        </div>

    </Layout>
), document.getElementById('app'));
