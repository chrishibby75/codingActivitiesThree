import React from "react";

const name = "Chris";
const num1 = 1;
const num2 = 2;

function JSXVariables() {
    return(
        <div className="main-controller">
            <div className="container">
                <div className="jumbotron">
                    <h2>My name is {name}. But you can call me...</h2>
                    <h1>The JSX Master!</h1>
                    <hr />
                    <h2>I can do math: {num1 + num2}.</h2>
                    <h2>
                        I can generate random numbers:
                        {Math.floor(Math.random() * 10) + 1}, {Math.floor(Math.random() *20) + 1},
                        {Math.floor(Math.random() * 30) + 1}.
                    </h2>
                    <h2>I can even reverse my name: {name.split("").reverse()}</h2>
                </div>
            </div>
        </div>
    );
}
export default JSXVariables;