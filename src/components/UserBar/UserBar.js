import {Container} from './UserBar.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/user.png';
import { useEffect, useState } from 'react';


export const UserBar=()=>{
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const user = useSelector((state) => state.auth.user);
    const avatarUrl = defaultAvatar ||user.avatar;
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
                <img src={avatarUrl} alt="User Avatar" />
            </Link>
            {!isMobile && user && <p>{userName}</p>}
        </Container>
    )
}
