import {Img} from './PetBlock.styled';

export const PetBlock = ({imgDesctop1, imgDesctop2, imgDesctop3,
                          imgTablet1, imgTablet2, imgTablet3,
                          imgMobile1, imgMobile2, imgMobile3}
 )=>{
    return (
        <picture>
            <source
            media="(min-width: 1280px)"
            srcSet={`
                ${imgDesctop1} 1x,
                ${imgDesctop2} 2x,
                ${imgDesctop3} 3x
                `}
            />
            <source
            media="(min-width: 768px)"
            srcSet={`
                ${imgTablet1} 1x,
                ${imgTablet2} 2x,
                ${imgTablet3} 3x
                `}
            />
            <source
             media="(min-width: 375px)"
             srcSet={`
               ${imgMobile1} 1x,
               ${imgMobile2} 2x,
               ${imgMobile3} 3x
               `}
            />
            <source
             media="(min-width: 320px)"
             srcSet={`
               ${imgMobile1} 1x,
               ${imgMobile2} 2x,
               ${imgMobile3} 3x
               `}
            />
            <Img alt="dog"
                src={imgMobile1} 
                srcSet={`
                ${imgMobile1} 1x,
                ${imgMobile2} 2x,
                ${imgMobile3} 3x
                      `}
                style={{ width: '100%', height: 'auto' }}/>

        </picture>
    )
}