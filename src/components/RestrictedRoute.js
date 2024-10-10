import { useAuth } from 'redux/hook/useAuth';
import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};