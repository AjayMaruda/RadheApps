import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import BlockChain from "./componets/BlockChain";
import FoodChain from './componets/FoodChain.jsx';
import ContactPage from './componets/ContactPage.jsx';
import { BrowserRouter, createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Error from './componets/Error.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blockChain',
    element: <BlockChain />,
    errorElement: <Error/>
  },
  {
    path:'/contactPage',
    element: <ContactPage />,
    errorElement: <Error/>
  },
  {
    path: '/foodChain',
    element: <FoodChain />,
    errorElement: <Error />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
