import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"

import router from "./routes/router.tsx"
import store from "./services/store.ts"

import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
