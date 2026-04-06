import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

import MainLayout from "../layouts/MAinLayout";
import ProtectedDashboard from "./ProtectedDashboard";
import AuthProtected from "./AuthProtected";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/home",
      element: <ProtectedDashboard />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "products",
              element: <Products />,
            },
            {
              path: "product/:id",   // ✅ ADD THIS
              element: <ProductDetails />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "register",
              element: <Register />,
            },
            {
              path: "",
              element: <Login />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRoutes;