import {NewsItem} from '../NewsItem/NewsItem';
import {List} from './NewsList.styled';

export const NewsList =({news})=>{
    return (
        <>
          <List>
           {news?.map(iterm =>(
                  <NewsItem key={iterm._id} value ={iterm} />
           )
           )}            
          </List>
        </>
    )
}

