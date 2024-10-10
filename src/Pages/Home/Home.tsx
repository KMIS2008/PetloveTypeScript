import {ContainerDiscription,
        Text,
        Span,
        Title,
        Img,
} from "./Homestyled";

import dogGirlDesktop1 from '../../images/dogGirlDesktop1.jpg';
import dogGirlDesktop2 from '../../images/dogGirlDesktop2.jpg';
import dogGirlDesktop3 from '../../images/dogGirlDesktop3.jpg';
import dogGirlTablet1 from '../../images/dogGirlTablet1.jpg';
import dogGirlTablet2 from '../../images/dogGirlTablet2.jpg';
import dogGirlTablet3 from '../../images/dogGirlTablet3.jpg';
import dogGirlMobile1 from '../../images/dogGirlMobile1.jpg';
import dogGirlMobile2 from '../../images/dogGirlMobile2.jpg';
import dogGirlMobile3 from '../../images/dogGirlMobile3.jpg';

export default function Home(){
return (
    <div>
        <ContainerDiscription>
            <Title>Take good <Span>care</Span> of your small pets</Title>
            <Text>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</Text>
        </ContainerDiscription>
       
          <picture>
        <source
          media="(min-width: 1280px)"
          sizes="(min-width: 1280px) 100vw, 1280px"
          srcSet={`
            ${dogGirlDesktop1} 1x,
            ${dogGirlDesktop2} 2x,
            ${dogGirlDesktop3} 3x
          `}
        />
        <source
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 100vw, 768px"
          srcSet={`
            ${dogGirlTablet1} 1x,
            ${dogGirlTablet2} 2x,
            ${dogGirlTablet3} 3x
          `}
          style={{ borderRadius: '60px' }}
        />
        <source
          media="(min-width: 375px)"
          sizes="(min-width: 375px) 100vw, 375px"
          srcSet={`
            ${dogGirlMobile1} 1x,
            ${dogGirlMobile2} 2x,
            ${dogGirlMobile3} 3x
          `}
        />
        <source
          media="(min-width: 320px)"
          sizes="(min-width: 320px) 100vw, 320px"
          srcSet={`
            ${dogGirlMobile1} 1x,
            ${dogGirlMobile2} 2x,
            ${dogGirlMobile3} 3x
          `}
        />
        <Img
          src={dogGirlMobile1} 
          srcSet={`
            ${dogGirlMobile1} 1x,
            ${dogGirlMobile2} 2x,
            ${dogGirlMobile3} 3x
          `}
          alt="dog"
          style={{ width: '100%', height: 'auto', }}
        />
           </picture>
    </div>
)
}