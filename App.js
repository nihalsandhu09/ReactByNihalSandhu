/**
 *
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

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, " i am h1 Tag"),
    React.createElement("h2", {}, " i am h2 Tag"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, " i am h1 Tag"),
    React.createElement("h2", {}, " i am h2 Tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
