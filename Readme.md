# Learning React JS

Notes based on the following tutorial.

[React Tutorial for Beginners](https://www.youtube.com/watch?v=SqcY0GlETPk)

React JS is a free and open-source front-end JavaScript library for building
user interfaces based on components.

## Introduction

### Prerequisites

You'll want some familiarity with the following languages.

* HTML
* CSS
* JavaScript
* TypeScript

This course will make use of TypeScript, a superset of JavaScript which adds
types.

### Overview

Why does React JS exist? 

With plain old vanilla JavaScript the only way to update an element of the DOM
is to refresh the page. This can lead to a lot of back and forth communication
between server and client. 

Reacts big improvements over vanilla JS is something known as the virtual DOM.
With the virtual DOM, components can be updated and "react" to user
interaction, without the need to refresh the page or do extra client server
communication.

React uses the abstraction called "components" to replace individual DOM
elements with responsive, reusable, modular components. Essentially a react app
is a tree of nested components called the virtual DOM.

### Basic Project Setup

We're going to want to install some things to get started with.

First we'll want to install nodejs and npm.

```
sudo apt install nodejs npm
```

Then from there using npm (node package manager) we'll want to install vite
which is a build tool for Javascript projects. 

```
npm create vite@latest
```

From there we'll just want to answer the prompts to create our project. In our
case we'll enter our project name and then select React and Typescript.

From there we'll want to go into our newly created project folder and run `npm
install` and `npm run dev` to install our node dependencies and run our web
server. 

Then if we visit the URL provided in a browser we should see our react app!

### Basic App Structure

Let's take a little tour of our newly created project directory.

In our index.html file we can see the following two lines.

```
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
```

The first line is our root document container. Inside of this div element is
where all of our react code is going to live.

The second is our script tag which imports our main TypeScript file. These two
line are how our react code is pulled into the app.

Let's look at some of those other dirs. Our TypeScript code lives in the src
directory. Our static assests like images, ect live in our public directory.
And our node modules are installed to the dir of that same name.

There's a package.json file that's used to contain information about our app
such as dependencies, version number, TS compilation options ect. Rarely edited
directly, except for in advanced use cases.

### Creating Our First React Component

We're using TS to write our components. In order to create a new component in
React we're going to create a new file in the soure directory named
`Message.tsx`. The extension for typescript is .ts and .tsx is a
typescript-react file.

In react a component can be as simple as just a function that returns the html
to be displayed. Function based components probably are the easiest way to
instantiate a component. However, there are also OOP class based components as
well, though this is typically associated with older react apps. Nowadays the
convention is to just use functions with hooks for statemanagement.

In our Message.tsx file we'll put the following.

```ts
// PascalCasing for function names.
function Message() {
    // JSX: JavaScript XML.
    return <h1>Hello World!</h1>;
}

export default Message;
```

The above uses JSX or JavaScript XML to represent the return value. JSX looks
like html, but its actually a superset of html that allows for JavaScript
(TypeScript) templating.

### How React Works Under the Hood

React uses the components defined in our source to build a component tree
called the virtual DOM. This DOM is a client-side in memory representation of
the page. When the state of a component changes, React will automatically
update the corresponding node in the virtual DOM hierarchy and re-render the
real DOM using the react-dom library. 

This react-dom code (in the `main.tsx` file) is what tells React to use the
virtual DOM. But the cool thing about react is that its built to be platform
agnostic. So if we wanted we could switch out this react-dom code with React
Native code to run our app as a mobile application.

```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## The React Ecosystem

So we've learned that React is a library for building UI elements. But what is
a library anyways? And what separate React from common JS Frameworks like
Angular or Vue.js?

A **library** is a tool that provides specific functionality.

Whereas a **framework** is a set of tools and guidelines for building
applications.

So React is just a tool for building reactive user interfaces.

However, a responsive user interface is just one part of an application. We may
also want our app to have routing (ie, defining specific routes for specific
pages), send and receive HTTP calls, manage the application state, validate
forms, do animations, ect.

For all of these different tasks we can use a web **framework**. However, the
cool thing about our react code is that it doesn't care. We can use React with
all sorts of different backend web frameworks and platforms. React just does
the UI parts and is built to be modular and reusable.


## Learning React

### Building components

#### Subsections

In this section we'll go over:

* Building Components
* Rendering Markup with JSX
* Managing State
* Passing input via props
* Debugging React apps

#### Creating a List Group Component

We'll be using Bootstrap 5 for this application to give us some prebuilt CSS
classes to work with.

We can install this with,

```
npm install bootstrap@5.2.3
```

Now we can wipe out the existing index.css and App.css files as those were
generated by vite.

Then in our `main.tsx` file we're going to replace `import './index.css'` with
`import 'bootstrap/dist/css/bootstrap.css'`.

Then in the src folder we're going to create a new folder called `components`.
This is not necessary by it is convention to store components in their own
folder. Then inside of our components folder we're going to create a file
called `ListGroup.tsx`. Once again using Pascal case to name everything.

For now we'll just put the following as our ListGroup component code.

* `src/components/ListGroup.tsx`

```ts
function ListGroup() {
    return <h1>List Group</h1>;
}

export default ListGroup;
```

Then in our `App.tsx` file we'll just have to import our new component.

* `src/App.tsx`

```ts
import ListGroup from './components/ListGroup';

function App() {
  return <div><ListGroup/ ></div>
}

export default App;
```

We can get some Bootstrap 5 List Group HTML example code from their website.

https://getbootstrap.com/docs/5.0/components/list-group/

Now back in our `ListGroup.tsx` file we're going to paste in our new HTML code
and do some light formatting.

* `src/components/ListGroup.tsx`

```ts
function ListGroup() {
  return (
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  );
}

export default ListGroup;
```

#### Dealing With Fragments

In React, one component can only return one element. For example, in our newly
created ListGroup component we couldn't add a `<h1>heading</h1>` tag before the
ul tag because that would cause an error. This is because React translates our
JSX code into HTML via JS or TS. In other words, the above heading JSX would
first get translated into something like, `React.createElement('h1')` which
cannot create multiple elements. So in React one component can only return one
element.

There are a few ways to get around this. First off, we could house the rest of
our JSX in a div element. Then the react component would only be returning one
element. But this creates an additional DOM element just for Reacts sake which
isn't necessarily the cleanest.

Another option would be to use a **Fragment**. A fragment can be created by
wrapping our multiple JSX elements in an empty tag. For example:

* `src/components/ListGroup.tsx`

```ts
function ListGroup() {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
```

#### Rendering Lists

There is no for loop in React. Instead we use the builtin JS map function to
turn the array of strings into an array of JSX li elements.

For example, here's our updated ListGroup code using the JS map function.

```ts
function ListGroup() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  return (
    <>
      <h1>Locations</h1>
      <ul className="list-group">
        {items.map(item => 
		  <li key={item}>{item}</li>
		)}
      </ul>
    </>
  );
}

export default ListGroup;
```

The above code uses the item.map() method to turn the array of locations into a
unique list of items, each with its own unique key (browsers will complain if
li's lack unique key).

#### Conditional Rendering

We can use JavaScript's conditional statements to return different results for
our components. For example, let say we want to display a different message
based on the length of the items array. We could do so with an if statement.

* `components/ListGroup.tsx`

```ts
function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>Locations</h1>
        <p>No items found</p>
      </>
    );

  return (
    <>
      <h1>Locations</h1>
      <ul className="list-group">
        {items.map(item => 
          <li key={item}>{item}</li>
        )}
      </ul>
    </>
  );
}

export default ListGroup;
```

That's one solution to the problem. However, its perhaps not the most elegant
way to go about it. Instead what we can do is use the `&&` (logical and)
operator to insert the conditional logic right into our return statement JSX
code.

For example:

* `App.tsx`

```ts
function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  items = [];

  return (
    <>
      <h1>Locations</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map(item => 
          <li key={item}>{item}</li>
        )}
      </ul>
    </>
  );
}

export default ListGroup;
```

Much cleaner!

#### Handling Events

We can see an example of event handling below.

```ts
import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  // Event handler.
  const handleClick = (event) => console.log(event);

  return (
    <>
      <h1>Locations</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => 
          <li 
            className="list-group-item"
            key={item} 
            onClick={handleClick}
          >
            {item}
          </li>
        )}
      </ul>
    </>
  );
}

export default ListGroup;
```

In that code we're using the onClick feature of the li element to pass the
mouse click event to console.log().

We do this by defining a `handleClick` anonymous function and passing it the
`event` parameter. We're using TypeScript so we need to import the MouseEvent
Type before passing `event` to the function so TS knows its type. That's what
the import statement at the top does. Then we can stick the `handleClick` event
handler function in our JSX block, so when an list item is clicked it passes
the event back to our anonymous function.

#### Managing State

We can manage the dynamic data associated with one of our component (aka that
components "state") by using the `useState` react function. First we have to
import it from react at the top of our component file. Then we can call the
`useState` hook with an arg of -1 and decompose the results into two variables.

The first is the name of the state value we want to change and the second is
the name setter function for setting that variable.

```ts
import { useState } from "react";

function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  // Hook function.
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>Locations</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => 
          <li 
            className={ 
              selectedIndex === index 
                ? 'list-group-item active' 
                : 'list-group-item'
            }
            key={item} 
            onClick={() => { setSelectedIndex(index); }}
          >
            {item}
          </li>
        )}
      </ul>
    </>
  );
}

export default ListGroup;

```

The ListGroup component function makes use of the useState() React Hook
function to manipulate the components state. The useState function can be
decomposed into a state variable that can be set and the setter function for
setting that variable. For example in the above code, the state variable is
selectedIndex and the setter function is setSelectedIndex.

```
  const [selectedIndex, setSelectedIndex] = useState(-1)
```

We can then use the list items onClick attribute to trigger an anonymous
function which set's the select index to the one that was clicked. 

```
            onClick={() => { setSelectedIndex(index); }}
```

On thing about react is every component has it own state. So if we insert a
second ListGroup in our main `App.tsx` file the two different elements will
have different, non-related state.

#### Passing Data via Props

Lets say we want to display a list of colors or a list of fruits along with our
list of places. But we'd like to reuse our existing ListGroup component. How
can we do that? We can do so by using properties (aka props).

Props are the inputs to our components.

* `App.tsx`

```ts
import ListGroup from './components/ListGroup';

function App() {
  let places = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  return <div><ListGroup items={places} heading="Places" /></div>
}

export default App;
```

* `components/ListGroup.tsx`

```ts
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {

  // Hook function.
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => 
          <li 
            className={ 
              selectedIndex === index 
                ? 'list-group-item active' 
                : 'list-group-item'
            }
            key={item} 
            onClick={() => { setSelectedIndex(index); }}
          >
            {item}
          </li>
        )}
      </ul>
    </>
  );
}

export default ListGroup;

```

We can see how props are used to control component state in the above example
code. First, we define the places array in the main `App.tsx` file and then we
pass it to the ListGroup component by defining a `Props` interface in the
`ListGroup.tsx` file.

With the Props interfaces in place we're able to call our component with the
items and heading specified. We can then pass that decomposed Prop into our
ListGroup function and then use its values accordingly.

#### Passing Functions via Props

In JavaScript (and TypeScript) functions are first class citizens. This means
they can be passed around and saved to variables and the function wont be
triggered until the var for it is invoked somewhere.

So we've used props to pass some data down into our component. But what about
passing information from our component back up the chain to the parent
component? For example, what if we want to communicate the selected value up to
the parent? Well we can do so using Props as well by passing an event handler
function down to the component via props.

* `App.tsx`

```ts
import ListGroup from './components/ListGroup';

function App() {
  let places = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={places} heading="Places" onSelectItem={handleSelectItem} /></div>
}

export default App;

```

In the above `App.tsx` file we start by creating a new event handler called
handleSelectItem and we set that to take a string called item and just log it
to the console. We then pass the event handler function as a prop to the
ListGroup component.

* `components/ListGroup.tsx`

```ts
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {

  // Hook function.
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => 
          <li 
            className={ 
              selectedIndex === index 
                ? 'list-group-item active' 
                : 'list-group-item'
            }
            key={item} 
            onClick={() => { 
              setSelectedIndex(index); 
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        )}
      </ul>
    </>
  );
}

export default ListGroup;

```

In the `ListGroup.tsx` file we then define onSelectItem as an anonymous void
function in our interface definition. Then we can decompose the Prop in the
parameter line of the component function. Finally we can call our
`onSelectItem()` function passing it the arg item which will get printed to
stdout (aka console.log).

#### State vs Props

Props or properties are the inputs passed to a component.

Stat is data managed by a component that can change over time.

So props are like functional args and state is like local function variables.

Props should be treated as immutable within the scope of the component. This
means that a prop should not be changed after its passed to a component
function. To do so is considered an anti-design pattern, or against the
fundamental design philosophy of react, although it is not syntactically
illegal.

Comparing this to State variables which are supposed to be mutable. This is he
whole point of using state variables. We want to use state to tell react that a
certain component has data that can change over time. 

Changes to either state or props will result in changes to the virtual DOM
causing a re-render.

#### Passing Children

What if we have elements in our root JSX code that we want to pass down to
another component? Well react offers us a way to do this as well.

To do this we'll first define an alert tag in our main `App.tsx` component.

* `App.tsx`

```ts
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
  let places = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <Alert>
        Alert Text!!!
      </Alert>

      <ListGroup 
        items={places} 
        heading="Places" 
        onSelectItem={handleSelectItem} 
      />
    </div>
    )

}

export default App;

```

As you can see we've created al Alert element and added some alert text to it.

Now on the Alert component end of things we can again create a Props interface
to accept the input. 

* `src/components/Alert.tsx`

```ts
interface Props {
  children: string;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert
```

That works but what if we want to pass html down. Well in that case instead of
type string we can declare the Props type to be `ReactNode`.






















