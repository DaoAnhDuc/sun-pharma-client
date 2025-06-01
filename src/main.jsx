import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import LayoutSunPharma from "./layout";
import HomePage from "./pages/HomePage";

// Router Configuration
const router = createBrowserRouter([
  {
    element: <LayoutSunPharma />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: null,
      },
      {
        path: "*",
        element: null,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(<RouterProvider router={router}></RouterProvider>);
