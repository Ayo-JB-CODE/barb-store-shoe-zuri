import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import NotFound from './Pages/NotFound.jsx';
import BreadCrumb from './Components/BreadCrumb/BreadCrumb.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/Shop",
    element: <Shop />
  },
  {
    path: "/Contact",
    element: <BreadCrumb />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
