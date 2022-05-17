import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom/client';

const newElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
console.log(newElement);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(newElement, container);
