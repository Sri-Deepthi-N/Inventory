import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = lazy(() => import("./App"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Inventory = lazy(() => import("./Pages/Inventory"));
const PurchaseOrder = lazy(() => import("./Pages/PurchaseOrder"));
const Suppliers = lazy(() => import("./Pages/Suppliers"));
const SalesOrder = lazy(() => import("./Pages/SalesOrder"));
const Customer = lazy(() => import("./Pages/Customer"));
const Report = lazy(() => import("./Pages/Report"));
const Products = lazy(() => import("./Pages/Products"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",

        element: (
          <Suspense>
            {" "}
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/inventory",
        element: (
          <Suspense>
            <Inventory />
          </Suspense>
        ),
      },
      {
        path: "/purchaseorder",
        element: (
          <Suspense>
            <PurchaseOrder />
          </Suspense>
        ),
      },
      {
        path: "/salesorder",
        element: (
          <Suspense>
            <SalesOrder />
          </Suspense>
        ),
      },
      {
        path: "/suppliers",
        element: (
          <Suspense>
            <Suppliers />
          </Suspense>
        ),
      },
      {
        path: "/customers",
        element: (
          <Suspense>
            <Customer />
          </Suspense>
        ),
      },
      {
        path: "/report",
        element: (
          <Suspense>
            <Report/>
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense>
            <Products/>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

reportWebVitals();