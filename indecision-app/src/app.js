class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>I am the Header</h1>
                <h2>Put your life in the hands of a computer </h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>I am options</p>
                <AddOption />
            </div>

        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>I am the add option</p>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));