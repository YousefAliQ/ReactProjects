'use strict';

// JSX - JavaScript XML

var template = React.createElement(
  'p',
  null,
  'this is JSX Really'
);
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
