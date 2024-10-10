import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "redux/hook/useAuth"
import { Wrapper,
         Text,
         Button } from "./UerMenustyled";

export const UserMenu=()=>{
  const dispatch = useDispatch();

  const {user} = useAuth();

  const handlLogout =()=>{
    dispatch(logOut())
  }
return (
    <Wrapper>
       <Text>{user.email}</Text>
       <Button type="button" onClick={handlLogout}>Logout</Button>
    </Wrapper>
)
}
