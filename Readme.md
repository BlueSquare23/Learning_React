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


## Building components

### Subsections

In this section we'll go over:

* Building Components
* Rendering Markup with JSX
* Managing State
* Passing input via props
* Debugging React apps

### Creating a List Group Component

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

### Dealing With Fragments

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

### Rendering Lists

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

### Conditional Rendering

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

### Handling Events

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

### Managing State

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

### Passing Data via Props

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

### Passing Functions via Props

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

### State vs Props

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

### Passing Children

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


## Styling Components

### Subsections

We'll look at a few ways to sytle our components in React using the following.

* Vanilla CSS
* CSS Modules
* CSS-in-JS
* Using CSS Libraries

### Vanilla CSS

CSS is hard. For years web developers have been using tools to make the process
of using CSS better for a reason; because bare bones CSS sucks! Its next to
impossible to build all of the UI elements for a modern web application from
scratch using vanilla CSS.

That being said, CSS is also unavoidable in web development and using a touch
of custom CSS can really jazz things up a bit.

To start with we'll remove the bootstrap import line from the `main.tsx` file.
In the browser we can see all of our nice BS5 styling is gone.

Then lets create a new file in our components dir called `ListGroup.css` and in
our `ListGroup.tsx` file we'll import the css file. 

* `styling-components/src/components/ListGroup.tsx`

```
import { useState } from "react";
import './ListGroup.css'
...
```

Then from there we can put any Vanilla CSS that we'd like into the
`ListGroup.css` file to add custom styling for our component.

### CSS Modules

Vanilla CSS suffers from the problem of name collisions. With complicated sites
pulling in multiple sheets globally scoped names can override eachother. That
is if sheet A says all P tags are green and sheet B says they're all bold,
they'll overlap with eachother causing confusion and bugs.

This is the problem CSS modules try to solve. A CSS module is a file in which
all class names are scoped locally, just like a JS module. That way we can use
the same CSS names in different files without worrying about name clashes.

The way we do this is by renaming our css file to contain .module.css

* `src/components/ListGroup.tsx`

```
import styles from './ListGroup.module.css'
```

As you can see, styles is imported as just a regular JS object. This object
contains the CSS classes defined in our CSS file.

We can then access those CSS classes in our JS.

* `src/components/ListGroup.tsx`

```ts
function ListGroup({ items, heading, onSelectItem }: Props) {

  // Hook function.
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={styles['list-group']}>
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

```

We can see now we're using the className defined in our styles object for
list-group. This removes any clashes because our bundler will automatically
give each css class a uniq name behind the scenes.

If we click inspect and then look at the class name for our ul element we'll
see its completely random.

`<ul class="_list-group_dvjk9_1">`

### CSS-in-JS

The idea behind CSS-in-JS is that we can write all the styles for a component
next to its definition in a JS or TS file. This provides the following
benifits.

* Scoped Styles
* All the CSS & JS/TS code is in one place
* Easier to delete a component
* Easier to style based on props/state

There are libraries that implment these concepts including, Styled Component,
Emotion, and Polish to name a few.

We're going to briefly go over styled components.

We can install this library with npm.

```
npm install @types/styled-components
```

Now in order to import the library we need to also install the types for it so
TS knows what it is.

```
npm install @types/styled-components
```

Now we can import the library into our `ListGroup.tsx` file.

```
import styled from 'styled-components';
```

With styled-components we no longer use the `className` attribute to define our
styles. Instead now we define the style right at the top of the `ListGroup.tsx`
file.

```ts
import { useState } from "react";
//import './ListGroup.css'
//import styles from './ListGroup.module.css'
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 15px 0;
`;

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
      <List>
        {items.map((item, index) =>
          <ListItem
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        )}
      </List>
    </>
  );
}

export default ListGroup;
```

In the above we replace the ul and li tags with custom react components that
has the defined styles applied to it. So in the JSX the ul and li tags become
\<List\> and \<ListItem\>.

One advantage of this CSS-in-JS/TS approach is that it allows for more
centrally organized component styling. This means all of the CSS can be in the
same file as the JS/TS. So if we ever go to delete a component, we can just
delete the JSX file and we don't have to go searching around for dead CSS to
trim.

#### Seperation of Concerns

Divide a program into distinct sections where each section handles a specific
functionality, rather than having everything in one place.

This helps ensure our programs are:

* Modular
* Easier to understand
* Easier to maintain
* Easier to modify

If our programs are modular we can build and test these modules individually.

In a module all the details are hidden behind a well defined interface. Think
about a remote control. All of the things we're able to control are accessible
through buttons laid out on the remote. 

Some people say that CSS in JS violates the seperation of concerns because all
of the pieces are in one file (style, markup, logic). However, in the scope of
a large application it actually helps to have each component bundled up into
its own package.

### Inline Styles

Its possible to use inline styling in JSX to apply styling tweaks. But just as
with regular HTML, inline styling can be messy and make things confusing and so
should probably be used as a last resort.

```
      <ul className="list-group" style={{ backgroundColor: 'yellow'}}>
```

The above is an example of inline styling.

### Popular UI Libraries

Nowadays there are many modern frameworks that exist to make UI building
easier.

* Bootstrap
* Material UI
* Tailwind CSS

Each of these libraries could be the subject of its own course, but we'll touch
on them breifly.

Bootstrap - A bunch of useful components, simple to use.

Material UI - Open source react component library that implments google's
material design, which is the design language used in google products.

Tailwind CSS - utility-first CSS framework for building class components.

### Adding Icons

There are bundles of icons out there for our UIs. We can install one for react
with npm.

```
npm i react-icons@4.7.1
```

From there we can go to the website for React Icons and browse available icons.

[React Icons](https://react-icons.github.io/react-icons/)

Once we find the component we want we can import it into our app and use it
just like any other react component.

* `src/App.tsx`

```ts
import { BsFillCalendarFill } from 'react-icons/bs'

function App () {

  return (
    <div>
      <BsFillCalendarFill color="red" size="40"/>
    </div>
  );

}

export default App;
```

And as you can see the `BsFillCalendarFill` component has color and size
attributes we can set on it.

### Using CSS Modules

* `src/App.tsx`

```ts
import Button from './components/Button';

function App() {

  return (
    <div>
      <Button
        color='primary'
      />
    </div>
    )
}

export default App;
```

* `src/components/Button.module.css`

```css
.btn {
  padding: 8px 12px;
  border-radius: 3px;
  border: 0;
}

.btn-primary {
  background-color: #0d6efd;
  color: white;
}
```

* `src/components/Button.tsx`

```ts
import styles from './Button.module.css';

function Button({ color, onButtonClick }: Props) {
  return (
    <button
      type="button"
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={onButtonClick}
    >
      Do a Fart!
    </button>
  )
}

export default Button
```

As you can see from the above we can import styles from the `Button.module.css`
file as an object. We can then apply the styling from the css module to our
react component by setting the className attribute equal to the css class
definitions in the css modules file.

### Building a Like Compnent

We can string together a bunch of the things we've learned so far to build a
Like component. We'll select two heart icons from the react icons page one
filled in the other just an outline. 

* `src/App.tsx`

```ts
import Like from './components/Like';

function App() {

  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  )
}

export default App;
```

* `src/components/Like.tsx`

```
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

function Like ({ onClick }: Props) {
  // useState hook
  const [status, setStatus] = useState(true);

  const toggle = () => {
    // Inverts the status
    setStatus(!status);
    // Notifies component consumer of click.
    onClick();
  }

  if (status)
    return (
      <div>
        <AiFillHeart color="red" size="40" onClick={toggle} />
      </div>
    );

  return <AiOutlineHeart size="40" onClick={toggle} />

}

export default Like;
```

We'll use the useState hook to create a status value and initialize it to true.
We'll then write a toggle function to invert the status whenever. Then we can
return the full heart colored red if status is true and just heart outline if
status false.

Good so far! We have a heart we can click that toggles back and forth the
state.

Now lets just setup a Prop to handle the onClick event and have that just
console log clicked in the `App.tsx` file.  We'll pass that to our Like
component function and then use it in the toggle function to run the handler
function when the heart is clicked.



















