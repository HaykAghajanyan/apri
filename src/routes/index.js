import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// import App from "../App";
// import Cats from "../pages/Cats";
import Layout from "../layout";
import UserProfile from "../pages/UserProfile";
// import TodoList from "../pages/TodoList";
// import TodoListHOC from "../hoc/TodoListHOC";

const App = lazy(() => import("../App"))
const Cats = lazy(() => import("../pages/Cats"))
const TodoList = lazy(() => import("../pages/TodoList"))
const TodoListHOC = lazy(() => import("../hoc/TodoListHOC"))


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
        path: 'userInfo',
        element: <UserProfile />
      },
      {
        path: 'cats',
        element: <Cats />,
        loader: async () => {
          return fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
        },
        action: async ({ request }) => {

        }
      },
      {
        path: 'todos',
        element: (
          <TodoListHOC>
            <TodoList />
          </TodoListHOC>
        )
      }
    ]
  },

]

export const router = createBrowserRouter(MAIN_ROUTS)


