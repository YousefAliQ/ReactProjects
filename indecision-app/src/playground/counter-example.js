class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: props.count
        };
    }

    handleAddOne(){
        this.setState(
            (prevState)=>{
                return{
                    count:prevState.count+1
                }
            }
        )
    }

    handleMinusOne(){
        this.setState(
            (prevState)=>{
                return{
                    count:prevState.count-1
                }
            }
        )
    }

    handleReset(){
        this.setState(
            ()=>{
                return{
                    count:0
                }
            }
        );

        // New style & sync --recommended
        // this.setState(
        //     (prevState)=>{
        //         return{
        //             count: prevState.count+1
        //         }
        //     }
        // );

        // Old style & async because of the virtual DOM --not recommended
        //this.setState({count:0});
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>reset</button>
            </div>
        );
    }

   
}
Counter.defaultProps = {
    count : 0
}

ReactDOM.render(<Counter count = {5}/>, document.getElementById('app'));