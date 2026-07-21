import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddExpense from "./pages/AddExpense";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";
import Budget from "./pages/Budget";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginSuccess from "./pages/LoginSuccess";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login-success",
    element: <LoginSuccess />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-expense",
        element: <AddExpense />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;