import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing, } from '../auth/selects.js';
// interface useAuthProps{
//   isLoggedIn:boolean,
//   isRefreshing:boolean,
//   user:User
// }
export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};
//# sourceMappingURL=useAuth.js.map