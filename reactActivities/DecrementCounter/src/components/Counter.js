import React from "react";
import CardBody from "./CardBody";

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count -1 });
    };

    render() {
        return(
            <div className="card text-center">
                <div className="card-header bg-primary text-white">
                    Click Counter!
                </div>
                <CardBody
                count={this.state.count}
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
                />
            </div>
        );
    }
}

export default Counter;