import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {Contater} from './AppLayout.styled';

 const AppLayout=()=>{
    return (
        <Contater>
            <AppBar/>

            <Suspense fallback={<div>Loading...</div>}>
                  <Outlet />
            </Suspense>
        </Contater>
    )
}

export default AppLayout;