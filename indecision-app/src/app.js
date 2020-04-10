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
    hanldePick(event) {
        alert('sdf');
    }

    render() {
        return (
            <div>
                <button onClick={this.hanldePick}>What should I do?</button>

            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props){
        super(props);

        // binding 'this' object to allow handleRemoveAll method to access props.
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        alert('sdf');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        if (option.trim()){
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