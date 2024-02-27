import { createBrowserRouter } from 'react-router-dom'

import App from "../App";
import Cats from "../pages/Cats";
import Layout from "../layout";


const MAIN_ROUTS = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path: 'cats',
        element: <Cats />
      }
    ]
  },

]

export const router = createBrowserRouter(MAIN_ROUTS)


