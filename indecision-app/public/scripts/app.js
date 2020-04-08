'use strict';

// JSX - JavaScript XML

var appRoot = document.getElementById('app');
var app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of technology',
    options: []
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderer();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderer();
};

var renderer = function renderer() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.title && React.createElement(
            'h3',
            null,
            app.subtitle
        ),
        app.options.length > 0 ? "my options" : "No options",
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'item 1'
            ),
            React.createElement(
                'li',
                null,
                'item 2'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderer();
