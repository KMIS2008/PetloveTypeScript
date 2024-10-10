import React from "react";
import { GlobalStyle } from './GlobalStyle';
import { Audio } from 'react-loader-spinner';
import {useEffect, FC } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../redux/hook/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute'; 
import { PrivateRoute } from './PrivateRoute';
import { AppDispatch } from "../redux/store";

import AppLayout from './AppLayout/AppLayout';

import { lazy, Suspense  } from 'react';
const Main = lazy(()=> import('../Pages/Main/Main'));
const Home = lazy(()=> import('../Pages/Home/Home'));
const Registr = lazy(()=> import('../Pages/Registr/Registr'));
const Login = lazy(()=> import ('../Pages/Login/Login'));
const Profile = lazy(()=> import ('../Pages/Profile/Profile'));
const News = lazy(()=> import ('../Pages/News/News'));
const Notices = lazy(()=> import ('../Pages/Notices/Notices'));
const AddPet = lazy(()=> import ('../Pages/AddPet/AddPet'));
const FriendPage = lazy(()=> import ('../Pages/Friends/Friends'));

const ErrorPage = lazy(()=> import ('../Pages/ErrorPage/ErrorPage'));

const useAppDispatch:()=> AppDispatch = useDispatch;

interface AppProps{
  height?:string;
  width?:string;
  color?:string;
  ariaLabel?:string;
  wrapperStyle?: any; 
  wrapperClass?:string  
}

    export const App:FC<AppProps> =()=> {
      
      const dispatch = useAppDispatch();

      const { isRefreshing } = useAuth();
    
      useEffect(() => {
        dispatch(refreshUser());
    
      }, [dispatch]);
    
      return isRefreshing ? (
        <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"
        wrapperStyle={{}} 
        wrapperClass=""  
      />
  ) : (
<div>
<Suspense fallback={       
        <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"
        wrapperStyle={{}} 
        wrapperClass=""  
      />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path = "/" element = {<AppLayout/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="register" element = { <RestrictedRoute redirectTo="/profile" component={<Registr />} />}/>
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