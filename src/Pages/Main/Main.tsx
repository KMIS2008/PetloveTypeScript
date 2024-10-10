import MainMobile1 from '../../images/MainMobile1.jpg';
import MainMobile2 from '../../images/MainMobile2.jpg';
import MainMobile3 from '../../images/MainMobile3.jpg';
import MainTablet1 from '../../images/MainTablet1.jpg';
import MainTablet2 from '../../images/MainTablet2.jpg';
import MainTablet3 from '../../images/MainTablet3.jpg';
import MainDesktop1 from '../../images/MainDesktop1.jpg';
import MainDesktop2 from '../../images/MainDesktop2.jpg';
import MainDesktop3 from '../../images/MainDesktop3.jpg';
import sprite from '../../images/sprite.svg';
import { useNavigate } from 'react-router-dom';
import {ContainerMain, Svg} from './Main.styled';

export default function Main() {
    const navigator = useNavigate(); 

    return (
        <ContainerMain>
            <Svg onClick={() => navigator('home')}>
               <use xlinkHref={sprite + '#icon-logo'} />
            </Svg>

            <picture>
        <source
          media="(min-width: 1280px)"
          sizes="(min-width: 1280px) 100vw, 1280px"
          srcSet={`
            ${MainDesktop1} 1x,
            ${MainDesktop2} 2x,
            ${MainDesktop3} 3x
          `}
        />
        <source
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 100vw, 768px"
          srcSet={`
            ${MainTablet1} 1x,
            ${MainTablet2} 2x,
            ${MainTablet3} 3x
          `}
        />
        <source
          media="(min-width: 375px)"
          sizes="(min-width: 375px) 100vw, 375px"
          srcSet={`
            ${MainMobile1} 1x,
            ${MainMobile2} 2x,
            ${MainMobile3} 3x
          `}
        />
        <source
          media="(min-width: 320px)"
          sizes="(min-width: 320px) 100vw, 320px"
          srcSet={`
            ${MainMobile1} 1x,
            ${MainMobile2} 2x,
            ${MainMobile3} 3x
          `}
        />
        <img
          src={MainMobile1} 
          srcSet={`
            ${MainMobile1} 1x,
            ${MainMobile2} 2x,
            ${MainMobile3} 3x
          `}
          alt="dog"
          style={{ width: '100%', height: 'auto' }}
        />
           </picture>

        </ContainerMain>
      
    );
  }