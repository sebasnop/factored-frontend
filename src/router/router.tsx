import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { StartPage } from "../pages/StartPage";

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
    path: "/start",
    element: (
      <ProtectedRoute>
        <StartPage />
      </ProtectedRoute>
    ),
  },
]);

export { router }