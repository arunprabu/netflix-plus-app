// Importing from node_modules
import React from 'react'; // importing official react core library
import ReactDOM from 'react-dom/client'; // import react-dom package for working with the DOM.

// Importing css
import './index.css'; // importing global styles

// Importing custom modules
import App from './App'; //importing App component 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// App component is rendered in the div which has an id root 
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
