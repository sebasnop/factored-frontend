import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { EmployeesPage } from "../pages/EmployeesPage";
import { ProfilePage } from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/employees",
    element: (
      <ProtectedRoute>
        <EmployeesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/employees/:id",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
]);

export { router }