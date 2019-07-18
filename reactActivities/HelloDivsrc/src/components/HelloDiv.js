import React from "react";
import HelloDiv from './HelloDiv';

const name = "Chris";
const thoughts = "is way cooler than normal HTML!";

function HelloDiv() {
    return(
        <div>
            <h1>My name is {name}.</h1>
            <p>React {thoughts}</p>
            <h2>Things I like are:</h2>
            <ul>
                <li>Whiskey</li>
                <li>Pho</li>
                <li>Nachose</li>
            </ul>
        </div>
    );
}

export default HelloDiv;