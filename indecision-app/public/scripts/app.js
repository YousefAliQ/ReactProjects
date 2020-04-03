// JSX - JavaScript XML

//const template = <p>this is JSX</p>
var template = /*#__PURE__*/React.createElement("p", null, "this is JSX");
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);