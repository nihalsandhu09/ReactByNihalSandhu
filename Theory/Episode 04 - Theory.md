## Namaste React Course by Akshay Saini

# Episode 04 - Talk is Cheap, show me the code

## Q: Is `JSX` mandatory for React?

A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.

#### Example of `JSX`

```
const sample = <h2>Greetings</h2>;
```

## Q: Is `ES6` mandatory for React?

A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element.
  The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

#### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

## Q: How can I write `comments` in JSX?

A: JSX comments are written as follows:

- `{/*  */}` - for single or multiline comments

#### Example

```
{/* A JSX comment */}
{/*
  Multi
  line
  JSX
  comment
*/}
```

## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?

A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.

#### Example

```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

## Q: What is `Reconciliation` in React?

A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

                                 (or)

Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible. React uses a virtual DOM (Document Object Model) to update the UI.

## Q: What is `React Fiber`?

A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

## Q: Why do we need `keys` in React?

A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.

#### Example

```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```

## Q: Can we use `index as keys` in React?

A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

## Q: What is `props in React`? Ways to.

A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

#### Example

```
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
```

## Q: What is `Config Driven UI`?

A: `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic.
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

## Q: Difference between `Virtual DOM` and `Real DOM`?

A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

- `Virtual DOM`
  - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
  - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
  - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
  - The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

| `Real DOM`                                                       | `Virtual DOM`                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| DOM manipulation is very expensive                               | DOM manipulation is very easy                            |
| There is too much memory wastage                                 | No memory wastage                                        |
| It updates Slow                                                  | It updates fast                                          |
| It can directly update HTML                                      | It can’t update HTML directly                            |
| Creates a new DOM if the element updates.                        | Update the JSX if the element update                     |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application                         | It is only a virtual representation of the DOM           |

1. Is JSX mandatory for React?
   No, JSX is not mandatory for React, but it is highly recommended. JSX is a syntax extension that looks like HTML but is used to describe UI elements in JavaScript. It makes React code more readable and intuitive by allowing developers to write components in a declarative way. However, React can also be used without JSX by calling the React.createElement() method directly.

Example without JSX:

js
Copy code
React.createElement('div', null, 'Hello, World!');
Example with JSX:

jsx
Copy code

<div>Hello, World!</div>
2. Is ES6 mandatory for React?
While React itself doesn’t require ES6, it is strongly recommended to use ES6 (or modern JavaScript) with React. ES6 features like arrow functions, classes, destructuring, and let/const are commonly used in React applications for cleaner and more efficient code. Most React code examples and libraries assume knowledge of ES6, so learning it is important for working effectively with React.

3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
   {TitleComponent}: This refers to the TitleComponent itself as a function or class, not an instance of the component. You might use this if you want to pass the component itself as a prop or access it as an object.

jsx
Copy code
const title = TitleComponent;
{<TitleComponent />}: This is an instance of the TitleComponent component. It is a shorthand for rendering a component that does not have children.

jsx
Copy code
<TitleComponent />
{<TitleComponent></TitleComponent>}: This is used for rendering the component when you want to pass children inside the component.

jsx
Copy code
<TitleComponent>Some Child Content</TitleComponent>
In most cases, you’ll use <TitleComponent /> or <TitleComponent></TitleComponent>, but they differ when handling children.

4. How can I write comments in JSX?
   In JSX, comments must be written inside curly braces as JavaScript expressions.

Single-line comment:

jsx
Copy code

<div>
  {/* This is a comment */}
  <p>Hello, World!</p>
</div>
Multi-line comment:

jsx
Copy code

<div>
  {/*
    This is a 
    multi-line comment
  */}
  <p>Hello, World!</p>
</div>
5. What is <React.Fragment></React.Fragment> and <></>?
<React.Fragment></React.Fragment> is a special component in React that lets you group multiple elements without adding an extra DOM node. This is useful when you need to return multiple elements from a component but don’t want to wrap them in a div or other container.

Example:

jsx
Copy code
<React.Fragment>

  <h1>Title</h1>
  <p>Description</p>
</React.Fragment>
<></> is the shorthand for React.Fragment.

Example:

jsx
Copy code
<>

  <h1>Title</h1>
  <p>Description</p>
</>
Both approaches avoid unnecessary wrapper elements in the final rendered HTML.

6. What is Reconciliation in React?
   Reconciliation is the process by which React updates the DOM to match the state and props of components. React maintains a virtual DOM, and when a component's state or props change, React compares the new virtual DOM with the previous one. This process is called diffing, and React only updates the parts of the real DOM that have changed. This makes React highly efficient.

7. What is React Fiber?
   React Fiber is the new reconciliation engine in React 16+. It allows React to efficiently handle more complex updates by breaking down the rendering work into smaller units of work. Fiber allows React to pause, stop, and restart work as needed, making the app more responsive, especially for large and complex UIs.

8. Why do we need keys in React?
   Keys help React identify which items in a list have changed, been added, or removed. This helps optimize the reconciliation process by allowing React to re-render only the changed elements, improving the performance of dynamic lists. Without keys, React would inefficiently update or re-render the entire list.

9. Can we use index as keys in React?
   Yes, you can use the index of the array as keys, but it is not recommended in most cases. If the order of items changes or the list is re-sorted, the keys could get mixed up, leading to incorrect updates in the UI. It's better to use a unique identifier for each item.

Example using index as key (not recommended):

jsx
Copy code
{items.map((item, index) => (

  <li key={index}>{item}</li>
))}
Better way with a unique key:

jsx
Copy code
{items.map((item) => (

  <li key={item.id}>{item.name}</li>
))}
10. What is props in React? Ways to pass them.
props (short for "properties") are inputs passed to components that allow them to be dynamic. Props are immutable in child components and can be passed down from a parent component to customize the behavior or display of a child component.

Example:

jsx
Copy code
const TitleComponent = (props) => {
return <h1>{props.title}</h1>;
};

// Passing props from a parent component
<TitleComponent title="Hello, World!" />
Ways to pass props:

Default props: Props passed explicitly from the parent component.
Destructured props: Destructuring in the child component for cleaner access.
jsx
Copy code
const TitleComponent = ({ title }) => {
return <h1>{title}</h1>;
};
Children as props: Special props.children can be used to pass elements between component tags.
jsx
Copy code
<TitleComponent>Hello, World!</TitleComponent> 11. What is Config Driven UI?
Config Driven UI refers to building user interfaces dynamically based on configuration objects (typically JSON). Instead of hardcoding the UI structure, the layout and behavior are determined by configurations, which makes the UI highly flexible and easier to maintain or update without changing the code.

For example, a form’s fields, validation rules, or labels could be defined in a configuration file, and the UI is generated based on that.

Example configuration:

js
Copy code
const config = {
fields: [
{ type: 'text', label: 'Name', placeholder: 'Enter your name' },
{ type: 'email', label: 'Email', placeholder: 'Enter your email' },
],
};
The component would render UI based on this configuration.
