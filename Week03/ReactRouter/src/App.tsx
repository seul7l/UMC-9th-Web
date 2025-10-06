import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import MoviesPage from "./Pages/MoviesPage";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":category",
        element: <MoviesPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
