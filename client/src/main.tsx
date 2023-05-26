import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './login/Login.tsx';
import Dashboard from './dashboard/Dashboard.tsx';
import Creator from './creator/Creator.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/app',
    element:<Login />
  },
  {
    path:"/app/dashboard",
    element:<Dashboard />
  },
  {
    path:"/app/creator",
    element:<Creator />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
