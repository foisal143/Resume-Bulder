import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateResume from './components/CreateResume/CreateResume';
import PersonalDeatils from './components/PersonalDetails/PersonalDeatils';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'resume',
        element: <CreateResume></CreateResume>,
        children: [
          {
            path: '/resume',
            element: <PersonalDeatils></PersonalDeatils>,
          },
          {
            path: 'skills',
            element: <Skills></Skills>,
          },
          {
            path: 'experience',
            element: <Experience></Experience>,
          },
          {
            path: 'project',
            element: <Projects></Projects>,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
