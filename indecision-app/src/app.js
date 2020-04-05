// JSX - JavaScript XML

const templateOne = (
    <div>
        <p>This is JSX </p>
        <h1>I am just a paragraph</h1>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>);

// const userName = 'Yousef Ali';
// const userAge = 27;
// const userLocation = 'IOWA';

const user = {
    name : 'Yousef Ali',
    age : 27,
    location : 'IOWA'
}
const templateTwo = (
    <div>
        <h1>Name : {user.name}</h1>
        <p> Age : {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);

const app = {
    title : 'Indicision App',
    subtitle : 'app for decisions'
}
const template = (
    <div>
        <h1>{app.title}</h1>
        <h3>{app.subtitle}</h3>
    </div>
);

//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX");
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

