import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", { id: "Parent" }, [React.createElement("div", { id: "child" },
    React.createElement("h1", { id: "h1" }, "Hello world")),
React.createElement("h2", { id: "h2" }, "Hello world2")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);