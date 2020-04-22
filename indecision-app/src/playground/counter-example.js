class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne(){
        console.log('addOne');
    }

    handleMinusOne(){
        console.log('minusOne');
    }

    handleReset(){
        console.log('reset');
    }

    render() {
        return (
            <div>
                <h1>Count : </h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>reset</button>
            </div>
        );
    }

   
}
ReactDOM.render(<Counter />, document.getElementById('app'));