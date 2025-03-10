import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./shared/components/layouts/MainLayout.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import StudentInformation from "./pages/studentInformation.tsx"; // ✅ Import Student Information Page
import CoordinatorInformation from "./pages/coordinatorIntformation.tsx";
import CompanyAccountSetup from "./pages/companyaccountsetup.tsx";   
import Auth from "./pages/Auth.tsx";

// Define Routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "/auth/register", element: <Register /> },
      {
        path: "/auth/login", element: <Login />
      }
    ],
  },
  {
    path: "/student-information", // ✅ Add Student Information Route
    element: <StudentInformation />,
  },
  {
    path: "/coordinator-information",
    element: <CoordinatorInformation />,
  },
  {
    path: "/company-account-setup",
    element: <CompanyAccountSetup />,
  },
]);

// Render Application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
