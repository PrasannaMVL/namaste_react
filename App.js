import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1', {id : "heading"}, "Namaste React");

const jsxHeading = <h1>Namaste React using JSX</h1>

const TitleComponent = () =>
  <h1>Namaste React</h1>
  

const HeadingComponent = () => {
  return (
    <div id="heading">
      <TitleComponent />
    <h1>Heading Functional Component</h1>
     </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);