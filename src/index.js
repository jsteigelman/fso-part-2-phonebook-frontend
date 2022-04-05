import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as ReactDOMClient from 'react-dom/client';
import './index.css'



// ReactDOM.render(<App />, document.getElementById('root'))

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App />);