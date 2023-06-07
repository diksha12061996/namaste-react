import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("div", { id: "Parent" }, [React.createElement("div", { id: "child" },
//     React.createElement("h1", { id: "h1" }, "Hello world")),
// React.createElement("h2", { id: "h2" }, "Hello world2")]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//React element
//const heading= React.createElement("h1",{id:"heading"},"Namaste 🙏")
const JsxHeading = () => (
    <h1 id='heading'
        className='heading' tabIndex='1'>
        React from JSX
    </h1>)

const HeadingComponent = () => (
    // <React.Fragment>
    <>
        <div id='container'>
            <JsxHeading />
            <h1 className='heading'>This is React Functional component</h1>
        </div>
        <div id='container2'>This is React Functional component1</div>
    </>
    // </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />)