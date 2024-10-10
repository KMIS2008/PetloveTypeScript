import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
import {Svg} from './Logostyled';
import { useLocation } from 'react-router-dom';


export const Logo=()=>{
    const location = useLocation();
    const isHome = location.pathname === '/home';

    return(
        <nav>
           <NavLink to="/home">
            {isHome?               
              <Svg>
                <use xlinkHref={sprite + '#icon-logo-2'}/>
              </Svg> 
              : 
              <Svg>
              <use xlinkHref={sprite + '#icon-logo-1'}/>
            </Svg> }
            </NavLink> 
       </nav>
    )
}