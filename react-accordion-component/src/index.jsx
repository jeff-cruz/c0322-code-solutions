import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  {
    id: '1',
    name: 'HTML',
    details: 'Hypertext Markup Language is the standard markuplanguage for creating web pages and web applications.'
  },
  {
    id: '2',
    name: 'CSS',
    details: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document.'
  },
  {
    id: '3',
    name: 'JavaScript',
    details: 'JavaScript is a high-level interpreted programming language that conforms to the ECMAScript Specification.'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion topics={topics}/>);
