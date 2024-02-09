import {
  createBrowserRouter
} from "react-router-dom";

import Main from "../layout/Main";
import AddTodo from "../pages/AddTodo";
import DetailsTodo from "../pages/DetailsTodo";
import EditTodo from "../pages/EditTodo";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/addTodo",
            element:<AddTodo />
        },
        {
            path:"/editTodo",
            element:<EditTodo />
        },
        {
            path:"/detailTodo/:id",
            element:<DetailsTodo />
        },


      ]
    },
    {
      path:"*",
      element: <PageNotFound />
    }
  ]);

