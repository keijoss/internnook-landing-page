import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter ,RouterProvider, createBrowserRouter} from "react-router";
import MainLayout from "./shared/components/layouts/MainLayout.tsx";
import LoginPage from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

const routes = createBrowserRouter([
  {path: "/",
    element: <MainLayout />
  },
  {
    path: "/auth",
    element: <LoginPage/>,
    children: [ {path: "/auth/register", element: <Register/>}, {path: "/auth/login", element: <LoginPage/>(
      <div>
           {/* <div className="bg-red-500 flex h-28 flex-col justify-content-center w-[30%] align-items-center border-3 rounded-lg">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </div>   */}
     </div>
    )}]
  }
])

createRoot(document.getElementById("root")!).render(
  // <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      <RouterProvider router={routes}/>
        {/* <MainLayout /> */}
    </StrictMode>
  // </BrowserRouter>
);
