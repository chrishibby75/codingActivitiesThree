import React from "react";
import Math from "./Math";

function Calculator() {
    return(
        <div>
            <p>
                19 + 142 = <Math num1={19} operator="+" num2={142} />
            </p>
            <p>
                42 - 17 = <Math num1={42} operator="-" num2={17} />
            </p>
            <p>
                100 * 3 = <Math num1={100} operator="*" num2={3} />
            </p>
            <p>
                96 / 4 = <Math num1={96} operator="/" num2={4} />
            </p>
        </div>
    );
}

export default Calculator;