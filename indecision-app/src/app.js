class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);


        this.state = {
            options: ["one", "two", "three"]
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomNumber = this.getOptionsRandomNumber();
        const option = this.state.options[randomNumber];
        alert(option);
    }

    getOptionsRandomNumber() {
        return Math.floor(Math.random() * this.state.options.length);
    }

    render() {
        const title = "Indicision";
        const subtitle = "Put your life in the hands of a computer";


        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
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
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>

            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}></Option>)
                }
                <AddOption></AddOption>
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
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        if (option.trim()) {
            alert(option);
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input name='option' type='text'></input>
                <button>Submit</button>
            </form>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));