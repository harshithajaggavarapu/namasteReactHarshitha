//const heading = React.createElement("h1", { id: "heading" }, "knock knock whos there!!");

import React from "react";
import ReactDOM from "react-dom/client"
// const headingJsx = <h1>knock knock who's there!!Is it JSX?</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headingJsx)


// REACT ELEMENT ( starts with small letter)
const heading = (
    <h1>Namaste react heading element</h1>
);

// REACT COMPONENT (starts with capital letter)
// react functional component is nothing but a javascript function returning jsx code
const Heading = () => (
    <div className="component">
        <h1>Namaste React heading one component</h1>
    </div>
);

// component can also be written as below
// calling component inside another component is called component composition
const Heading2 = () => {
    return (<div className="component">
        <Heading />
        <h1>Namaste React heading two component</h1>
    </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(<Heading />);
root.render(<Heading2 />);