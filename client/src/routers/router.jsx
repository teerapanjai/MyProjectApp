import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
// import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayOut from "../dashboard/DashboardLayOut";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/blog",
      //   element: <Blog />,
      // },
      {
        path: "/book/:bookID",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/book/${params.bookID}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayOut />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />,
      },
      {
        path: "/admin/dashboard/edit-books/:bookID",
        element: <EditBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/book/${params.bookID}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  }
]);

export default router;
