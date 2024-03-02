import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonProvider from "./contexts/personContext";
import { router } from "./routes";

import './assets/index.css';
import TodosProvider from "./contexts/TodosProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));

// const div1 = React.createElement('div', { className: 'class'})
// wrap

root.render(
  <PersonProvider>
    <TodosProvider>
      <RouterProvider router={router}/>
    </TodosProvider>
  </PersonProvider>
);

// jsx

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
