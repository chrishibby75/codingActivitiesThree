import React from "react";

const name = "Christopher";
const thoughts = "my favorite new thing next to Root Beer Whiskey!";

const noVowels = str => {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            result = str[i];
        }
    }
    return result;
};

function JSXVariables() {
    return(
        <div className="main-controller">
            <div className="controller">
                <div className="jumbotron">
                    <h1>Hi! My name is {name}!</h1>
                    <h2>My name has {name.length} letter in it.</h2>
                    <h2>My name without any vowels looks like: {noVowels(name)}</h2>
                    <h2>React is {thoughts}</h2>
                </div>
            </div>
        </div>
    );
}

export default JSXVariables;