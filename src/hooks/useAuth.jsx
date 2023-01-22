import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

export function useAuth() {
    return {
        isLoggedIn : useSelector(selectIsLoggedIn),
        isRefreshing : useSelector(selectIsRefreshing),
        user : useSelector(selectUser),
    }
}