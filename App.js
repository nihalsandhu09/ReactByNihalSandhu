/**
 * // React Element = > Object > render > Htmlelement

const heading = React.createElement("h1", { id: "heading" }, "This is h1 tag ");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

 *
 *   <div id = "Parent">
 *      <div id = "Child">
 *       <h1> i am h1 tag </h1>
 *       <h2> i am h2 tag </h2>
 *      <div>
 *   <div>
 *  // const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From React"
// );
 */

import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <h1 id="heading ">Nihal is the greart developer is there </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <h1> this is functional component </h1>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
