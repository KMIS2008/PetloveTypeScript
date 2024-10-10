import {Container} from './UserBar.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/user.png';
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store';


export const UserBar=()=>{
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const user = useSelector((state:RootState) => state.auth.user);
    const userName = user ? user.name : '';

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <Container>
            <Link to="/profile">
                <img src={user.avatar??defaultAvatar} alt="User Avatar" />
            </Link>
            {!isMobile && user && <p>{userName}</p>}
        </Container>
    )
}
