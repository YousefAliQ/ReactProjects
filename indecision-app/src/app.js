// JSX - JavaScript XML

const appRoot = document.getElementById('app');
const app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of technology',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderer();
    }
}

const removeAll = () => {
    app.options = [];
    renderer();
}

const renderer = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.title && <h3>{app.subtitle}</h3>}
            {app.options.length > 0 ? "my options" : "No options"}

            <p>{app.options.length}</p>

            <button onClick={removeAll}>Remove All</button>

            <ol>
                <li>item 1</li>
                <li>item 2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderer();
