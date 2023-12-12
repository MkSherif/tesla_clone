import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import {createBrowserRouter,Router,RouterProvider} from "react-router-dom";
import Model_s from './pages/Model_s';
import Model_x from './pages/Model_x';
import Model_3 from './pages/Model_3';
import Model_y from './pages/Model_y';
import App from './App';
import Cybertruck from './pages/Cybertruck';
import NotFound from './components/notfound/Notfound';


const router = createBrowserRouter([
  {
    path: "/",
    element:(
    <App>
       <Home />
    </App>
   ),
  },
  {
    path: "/model_y",
    element: (
      <App>
      <Model_y/>,
      </App>
      ),
  },
  {
    path: "/model_3",
    element: (
      <App>
      <Model_3 />,
      </App>
      ),
  },
  {
    path: "/model_x",
    element: (
      <App>
      <Model_x/>,
      </App>
      ),
  },
  {
    path: "/model_s",
    element: (
      <App>
      <Model_s />,
      </App>
      ),
  },
  {
    path: "/cypertruck",
    element: (
      <App>
      <Cybertruck />,
      </App>
      ),
  },
  {
    path: "/notfound",
    element: (
      <App>
      <NotFound />
      </App>
      ),
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
