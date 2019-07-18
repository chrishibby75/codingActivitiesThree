import React from "react";

function Math(props) {
    let value;

    switch(props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;

        case "-":
            value = props.num1 - props.num2;
            break;

            case "*":
                value = props.num1 * props.num2;
                break;

            case "/":
                value = props.num1 / props.num2;
                break;

            default:
                value = NaN
    }
    return <span style={{ fontSize: value }}>{value}</span>
}

export default Math;