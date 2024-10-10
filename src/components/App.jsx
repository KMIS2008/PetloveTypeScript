import { GlobalStyle } from './GlobalStyle';
import { Audio } from 'react-loader-spinner'

import {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './AppLayout/AppLayout';
import { useAuth } from 'redux/hook/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute'; 
import { PrivateRoute } from './PrivateRoute';

import { lazy, Suspense  } from 'react';
const Main = lazy(()=> import('Pages/Main/Main'));
const Home = lazy(()=> import('Pages/Home/Home'));
const Reistr = lazy(()=> import('Pages/Registr/Registr'));
const Login = lazy(()=> import ('Pages/Login/Login'));
const News = lazy(()=> import ('Pages/News/News'));
const Notices = lazy(()=> import ('Pages/Notices/Notices'));
const AddPet = lazy(()=> import ('Pages/AddPet/AddPet'));

const ErrorPage = lazy(()=> import ('Pages/ErrorPage/ErrorPage'));
const FriendPage = lazy(()=> import ('Pages/Friends/Friends'));
const Profile = lazy(()=> import ('Pages/Profile/Profile'));


    export const App =()=> {
      
      const dispatch = useDispatch();

      const { isRefreshing } = useAuth();
    
      useEffect(() => {
        dispatch(refreshUser());
    
      }, [dispatch]);
    
      return isRefreshing ? (
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
  ) : (
<div>
<Suspense fallback={       
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path = "/" element = {<AppLayout/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="register" element = { <RestrictedRoute redirectTo="/profile" component={<Reistr />} />}/>
              <Route path = "login" element ={<RestrictedRoute redirectTo="/profile" component={<Login/>} />}/>
              <Route path="news" element={<News/>}/>
              <Route path="notices" element= { <Notices/>} />
              <Route path="add-pet" element={ <PrivateRoute redirectTo="/login" component={<AddPet/>} />}/>
              <Route path="friends" element={<FriendPage/>}/>
              <Route path="profile" element={ <PrivateRoute redirectTo="/login" component={<Profile/>} />}/>
              <Route path="*" element={<ErrorPage/>} />
            </Route>
          </Routes>
          </Suspense>

     <GlobalStyle/>
</div>
  )
    };
    
