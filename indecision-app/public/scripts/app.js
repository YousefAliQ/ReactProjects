'use strict';

// JSX - JavaScript XML

var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'This is JSX '
    ),
    React.createElement(
        'h1',
        null,
        'I am just a paragraph'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'One'
        ),
        React.createElement(
            'li',
            null,
            'Two'
        )
    )
);

// const userName = 'Yousef Ali';
// const userAge = 27;
// const userLocation = 'IOWA';

var user = {
    name: 'Yousef Ali',
    age: 27,
    location: 'IOWA'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name : ',
        user.name
    ),
    React.createElement(
        'p',
        null,
        ' Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.location
    )
);

var app = {
    title: 'Indicision App',
    subtitle: 'app for decisions'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h3',
        null,
        app.subtitle
    )
);

//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
