import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import RulesPage from './pages/RulesPage';
import ContactPage from './pages/ContactPage';
import './assests/css/style.css';
import './assests/css/hover.css';
import './assests/css/public.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <AboutPage/>,
  },
  {
    path: "Faq",
    element: <FaqPage/>,
  },
  {
    path: "Rules",
    element: <RulesPage/>,
  },
  {
    path: "Contact",
    element: <ContactPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


