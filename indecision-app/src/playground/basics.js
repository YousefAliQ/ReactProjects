
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

let count =0;
const addOne = ()=>{
    count++;
    renderCounterApp();
}
const minusOne = ()=>{
    count--;
    renderCounterApp();
}
const reset = ()=>{
    count=0;
    renderCounterApp();
}

const renderCounterApp = ()=>{
    const templateThree = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne} >-1</button>
            <button onClick={reset} >Reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
}
renderCounterApp();