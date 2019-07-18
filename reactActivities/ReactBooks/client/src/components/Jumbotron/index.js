import React from "react";

function Jumbotron({ children }) {
    return(
        <div className="jumbotron" style={{ height: 300, clear: "both", paddingTop: 10, textAlign: "center"}}>
            {children}
        </div>
    );
}

export default Jumbotron;