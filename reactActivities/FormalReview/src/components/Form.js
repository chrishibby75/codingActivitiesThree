import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
      };

      handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        alert(`Username ${this.state.username}\nPassword: ${this.state.password}`);
        this.setState({
            username: "",
            password: ""
        });
      };

      render() {
          return(
              <form>
                  <p>Username: {this.state.username}</p>
                  <p>Password: {this.state.password}</p>
                  <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  />
                  <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  />
                  <button onClick={this.handleFormSubmit}>Submit</button>
              </form>
          );
      }
}

export default Form;