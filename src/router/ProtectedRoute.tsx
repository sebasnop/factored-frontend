import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { loggedIn } = useAppContext();

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export { ProtectedRoute };
