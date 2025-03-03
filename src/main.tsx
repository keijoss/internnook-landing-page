import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./shared/components/layouts/MainLayout.tsx";
import LoginPage from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import StudentInformation from "./pages/StudentInformation.tsx"; // ✅ Import Student Information Page

// Define Routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/auth",
    element: <LoginPage />,
    children: [
      { path: "/auth/register", element: <Register /> },
      {
        path: "/auth/register",
        element: (
          <div className="bg-red-500 flex h-28 flex-col justify-content-center w-[30%] align-items-center border-3 rounded-lg">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </div>
        ),
      },
    ],
  },
  {
    path: "/student-information", // ✅ Add Student Information Route
    element: <StudentInformation />,
  },
]);

// Render Application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
