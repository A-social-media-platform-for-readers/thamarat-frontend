import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// Components
import ForgotPassword from "./routes/ForgotPassword";
import Login from "./routes/Login";
import SignUp1 from "./routes/SignUp1";
import Home from "./routes/Home";
import BookStore from "./Components/BookStore/BookStore";
import BookPage from "./routes/BookPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/ForgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/SignUp1",
        element: <SignUp1 />,
      },
    ],
  },
  {
    path: "Home",
    element: <Home />,
    children: [
      {
        index: true,
        element: <BookStore />,
      },
      {
        path: "/Home/BookPage",
        element: <BookPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();