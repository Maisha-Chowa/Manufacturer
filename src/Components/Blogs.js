import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>Blogs Sections</h2>
      <h2>14.1 How will you improve the performance of a React Application?</h2>
      <p>
        1. Keeping the component state update in a parent component local where
        necessary <br />
        2. Memoizing React components to prevent unnecessary re-renders <br />
        3. Code-splitting in React using dynamic import()
        <br />
        4. Windowing or list virtualization in React applications
      </p>
      <h2>14.3 How does prototypical inheritance work?</h2>
      <p>
        JavaScript is a prototype-based, Object Oriented programming language.
        After the ES6 updates, JavaScript allowed for “prototypal inheritance”,
        meaning that objects and methods can be shared, extended, and copied.{" "}
        <br />
        The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object. Traditionally, in
        order to get and set the [[Prototype]] of an object, we use
        Object.getPrototypeOf and Object.
      </p>
      <h2>
        14.2 What are the different ways to manage a state in a React
        application?
      </h2>
      <p>
        There are four main types of state need to properly manage in React
        apps: <br />
        1. Local state. <br />
        2. Global state. <br />
        3. Server state. <br />
        4. URL state.
      </p>
      <h2>
        14.4 Why you do not set the state directly in React. For example, if you
        have const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h2>
      <h2>
        14.5 You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h2>
    </div>
  );
};

export default Blogs;
