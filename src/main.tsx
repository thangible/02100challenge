import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './layouts/dashboard';
import TaskTwo from './pages/task-2';
import TaskOne from './pages/task-1';
import TaskThree from './pages/task-3';


const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: 'task-2',
            Component: TaskTwo,
          },
          {
            path: 'task-1',
            Component: TaskOne,
          },
          {
            path: 'task-3',
            Component: TaskThree,
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
