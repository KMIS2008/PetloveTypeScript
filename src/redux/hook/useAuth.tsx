import { useSelector } from 'react-redux';
import { RootState } from '../store.js';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../auth/selects';
import { User } from '../auth/authSlice.js';

// interface useAuthProps{
//   isLoggedIn:boolean,
//   isRefreshing:boolean,
//   user:User
// }

export const useAuth = () => {
  const isLoggedIn = useSelector<RootState, boolean>(selectIsLoggedIn);
  const isRefreshing = useSelector<RootState,boolean>(selectIsRefreshing);
  const user = useSelector<RootState, User>(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};