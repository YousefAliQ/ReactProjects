class IndecisionApp extends React.Component {
    render() {
        const title = "Indicision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["one", "two", "four"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}></Option>)
                }
            </div>

        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
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