'use strict';

// JSX - JavaScript XML

//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX");
var appRoot = document.getElementById('app');

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

var userName = 'Yousef Ali';
var userAge = 27;
var userLocation = 'IOWA';

var app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of technology',
    options: ['One', 'Two']
};
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
    app.options.length > 0 ? "my options" : "No options"
);

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
        user.name ? user.name : 'idk'
    ),
    user.age && user.age > 20 && React.createElement(
        'p',
        null,
        ' Age : ',
        user.age
    ),
    getLocation(user.location)
);

function getLocation(location) {
    if (location) return React.createElement(
        'p',
        null,
        'Location : ',
        location
    );
}

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var templateThree = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count : ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateThree, appRoot);
};
renderCounterApp();
