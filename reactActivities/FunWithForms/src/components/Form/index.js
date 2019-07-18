import React from "react";
import "./style.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            password: ""
        };
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            alert("Please enter a first and last name.");
        }
        else if (this.state.password.length < 8) {
            alert(`Your password must be at least 8 characters ${this.state.firstName} ${this.state.lastName}`);
        }
        else {
            alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        }

        this.setState({
            firstName: "",
            lastName: "",
            password: ""
        });
    };

    render() {
        return (
            <div>
                <p>
                    Hello {this.state.firstName} {this.state.lastName}
                </p>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="password"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;