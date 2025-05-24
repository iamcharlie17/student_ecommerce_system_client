import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import MyService from "./pages/dashboard/MyService.jsx";
import MyProducts from "./pages/dashboard/MyProducts.jsx";
import ProductsProvider from "./providers/ProductsProvider.jsx";
import PostItem from "./pages/post-item/PostItem.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import MyAccount from "./pages/my-account/MyAccount.jsx";
import AllItems from "./pages/all-items/AllItems.jsx";
import ItemDetails from "./pages/item-details/ItemDetails.jsx";
import MyAccountLayout from "./layouts/MyAccountLayout.jsx";
import Ads from "./components/stu-dashboard/Ads.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post-item",
    element: (
      <PrivateRoute>
        <PostItem />
      </PrivateRoute>
    ),
  },
  {
    path: "/all-items",
    element: <AllItems />,
  },
  {
    path: "/item/:id",
    element: <ItemDetails/>
  },
  {
    path: "/account",
    element: <MyAccountLayout/>,
    children: [
      {
        index: true,
        element: <Ads/>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "services",
        element: <MyService />,
      },
      {
        path: "products",
        element: <MyProducts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>
);
