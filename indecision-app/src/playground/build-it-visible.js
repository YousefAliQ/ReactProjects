const appRoot = document.getElementById("app");

class Visibility extends React.Component {

    constructor(props) {
        super(props);

        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            isVisible: false
        }
    }

    toggleDetails() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    }

    render() {
        return (
            <div>
                <h1>visibility Toggle</h1>
                <button onClick={this.toggleDetails}>{this.state.isVisible ? 'Hide Details' : 'Show Details'}</button>

                {this.state.isVisible && (
                    <p>Hey Dude!</p>
                )}
            </div>
        );
    }
}
ReactDOM.render(<Visibility />, appRoot);

