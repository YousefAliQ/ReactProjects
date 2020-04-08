const appRoot = document.getElementById("app");
let isVisible = false;

const render = () => {
    const toggleDetails = () => {
        isVisible = !isVisible;
        render();
    }
    const jsx = (
        <div>
            <h1>visibility Toggle</h1>
            <button onClick={toggleDetails}>{isVisible ? 'Hide Details' : 'Show Details'}</button>

            {isVisible && (
                <p>Hey Dude!</p>
            )}
        </div>
    )

    ReactDOM.render(jsx, appRoot);
}
render();
