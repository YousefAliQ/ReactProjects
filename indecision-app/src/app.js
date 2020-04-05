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

const userName = 'Yousef Ali';
const userAge = 27;
const userLocation = 'IOWA';

const app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of technology',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.title && <h3>{app.subtitle}</h3>}
        {app.options.length > 0 ? "my options" : "No options"}
    </div>
);

const user = {
    name: 'Yousef Ali',
    age: 27,
    location: 'IOWA'
}
const templateTwo = (
    <div>
        <h1>Name : {user.name ? user.name : 'idk'}</h1>
        {user.age && user.age > 20 && <p> Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

function getLocation(location) {
    if (location)
        return <p>Location : {location}</p>;
}

//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX");
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

