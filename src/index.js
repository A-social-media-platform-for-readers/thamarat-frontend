import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// Components
import Root from "./routes/Root";
import ForgotPassword from "./routes/ForgotPassword";
import Login from "./routes/Login";
import SignUp1 from "./routes/SignUp1";
import Home from "./routes/Home";
import BookPage from "./routes/BookPage";
import SocialMedia from "./routes/SocialMedia";
import BookStore from "./Components/BookStore/BookStore";
import Library from "./routes/Library";
import MyBookPage from "./routes/MyBookPage";
import AddBook from "./routes/AddBook";
import BookTAL from "./routes/BookTAL";
import Chat from "./routes/Chat";

const routes = createBrowserRouter([
  {
    path: "/thamarat-frontend",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/thamarat-frontend/ForgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/thamarat-frontend/SignUp1",
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
        path: "/Home/BookPage/:id/",
        element: <BookPage />,
      },
      {
        path: "/Home/Library",
        element: <Library />,
      },
      {
        path: `/Home/Library/MyBookPage/:id/reading`,
        element: <MyBookPage />,
      },
      {
        path: `/Home/Library/MyBookPage/:id/readed`,
        element: <MyBookPage />,
      },
      {
        path: `/Home/Library/MyBookPage/:id/toRead`,
        element: <MyBookPage />,
      },
      {
        path: "/Home/Library/MyBookPage/:id/reading/BookTAL",
        element: <BookTAL />,
      },
      {
        path: "/Home/Library/MyBookPage/:id/readed/BookTAL",
        element: <BookTAL />,
      },
      {
        path: "/Home/Library/MyBookPage/:id/toRead/BookTAL",
        element: <BookTAL />,
      },
    ],
  },
  {
    path: "/SocialMedia",
    element: <SocialMedia />,
  },
  {
    path: "/AddBook",
    element: <AddBook />,
  },
  {
    path: "/Chat",
    element: <Chat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
