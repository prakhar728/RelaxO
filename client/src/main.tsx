import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './login/Login.tsx';
import Subscription from "./subscription/Subscription.tsx"
import Creator from './creator/Creator.tsx';
import Subscriptions from './subscriptions/Subscriptions.tsx';

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
    path:"/app/creator",
    element:<Creator />
  },
  {
    path:"/app/subscriptions",
    element:<Subscriptions />
  },
  {
    path:"/app/subscription/:id",
    element:<Subscription />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
