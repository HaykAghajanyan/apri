import React, {Suspense} from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom'

import {store} from "./redux";
import {router} from "./routes";
import PersonProvider from "./contexts/personContext";
import TodosProvider from "./contexts/TodosProvider";

import './assets/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const div1 = React.createElement('div', { className: 'class'})
// wrap

root.render(
  <Suspense fallback={<div>...LOADING</div>}>
    <Provider store={store}>
      <PersonProvider>
        <TodosProvider>
          <RouterProvider router={router}/>
        </TodosProvider>
      </PersonProvider>
    </Provider>
  </Suspense>
);

// jsx

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
