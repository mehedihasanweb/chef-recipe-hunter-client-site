import React from 'react';
import { Container } from 'react-bootstrap';
// import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <Container className='my-5'>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
            <div ref={ref} className='my-4 border border-success-subtle border-3 rounded-5 p-4'>
                <h2>Question 1: Difference between uncontrolled and controlled components</h2>
                <h4>Ans: Uncontrolled components are from elements that store their own state internally, while controlled components are from elements whose state is controlled by react.Uncontrolled components are usually simple to implement, as they handle their own stateand data management.Controlled components, on the other hand, provide more control and allow for validation and customization of user input</h4>
            </div>
            <div className='my-4 my-4 border border-success-subtle border-3 rounded-5 p-4'>
                <h2>Question 2: Difference Between Node.js and Express.js</h2>
                <h4>Node.js is javascript runtime built on chroms's v8 javascript engine.it allows you to execute javascript code on the server side, enabling server-side scripting and building scalable network applications. Express.js,on the other hand,is a web application framework for node.js. it provides a set of features and tooles to build web application,APIs,and server-side rendering. Express.js simplifies the development process by providing a robust set of HTTP utility methods and middleware.</h4>
            </div>
            <div className='my-4 my-4 border border-success-subtle border-3 rounded-5 p-4'>
                <h2>Question 3: Validating React Props Using PropTypes</h2>
                <h4>PropTypes is a library used for type checking props in react components.By defining propTypes for your component's props.you can ensure that the correct data types are being passed to the components. It helps to catch bugs and provides better documentation for the components. PropsTypes provides a variety of validators, such as required. default values, custom validators,and more.</h4>
            </div>
            <div className='my-4 border border-success-subtle border-3 rounded-5 p-4'>
                <h2>Custom Hooks in React</h2>
                <h4>Custom hooks are javascript function that utilize the react hooks api to share logic and stateful behavior between components. they allow you to extract reusable logic from components and create modular, self-contained functions.Custom hooks can be used for a variety of purposes, such as handling from validation, managing state, connecting to APIs, and more.Creating custom hooks promotes code reusability.reduces duplication,and makes your codebase more organized and maintainable.</h4>
            </div>
        </Container>
    );
};

export default Blog;