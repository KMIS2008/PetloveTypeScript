import {NoticesItem} from '../NoticesItem/NoticesItem';
import {Container} from './NoticeList.styled';


export const NoticesList=({notices, trash})=>{

    return (
        <Container>
            {notices?.map(iterm=>( 
            <NoticesItem key={iterm._id} notice={iterm} trash={trash}/>
        ))}
        
        </Container>
    )
}