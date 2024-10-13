import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 id="heading ">Nihal is the greart developer is there </h1>;

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1> this is functional component </h1>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
