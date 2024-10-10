import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {selectorTotalPages} from '../../redux/selects';
import {Container, Button, ButtonNext, StyledRiArrowLeftDoubleFill, 
        StyledIoIosArrowBack, StyledIoIosArrowForward, StyledArrowRightDoubleFill } from './Pagination.styled';


export const Pagination=({handleChangeNewPage, currentPage})=>{
  const totalPages=useSelector(selectorTotalPages);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const visiblePages = isMobile ? 2 : 3;

  const generatePageNumbers = () => {
  
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage < visiblePages - 1) {
        startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const pages: number[]  = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    return pages;
}

const pages = generatePageNumbers();

    return(
<>
     {totalPages > 1 && (
        <Container>
        
            <ButtonNext onClick={()=>handleChangeNewPage(1)} 
                        disabled={currentPage === 1}
                        type='button'>  
                        <StyledRiArrowLeftDoubleFill /> 
           </ButtonNext>

           <ButtonNext onClick={()=>handleChangeNewPage(currentPage-1)}
                       disabled={currentPage === 1}
                       type='button'> 
                       <StyledIoIosArrowBack/> 
           </ButtonNext>  

           {pages[0] > 1 && <Button>...</Button>}
            
            {pages.map((page) => (
                <Button 
                    key={page} 
                    type='button' 
                    onClick={() => handleChangeNewPage(page)}
                >
                    {page}
                </Button>
            ))}

            {pages[pages.length - 1] < totalPages && <Button>...</Button>}
          
           <ButtonNext onClick={()=>handleChangeNewPage(currentPage+1)}
                       disabled={currentPage === totalPages}
                       type='button'>
                       <StyledIoIosArrowForward/> 
           </ButtonNext>

           <ButtonNext onClick={()=>handleChangeNewPage(totalPages)} 
                       disabled={currentPage === totalPages}
                       type='button'>
                       <StyledArrowRightDoubleFill/>
           </ButtonNext> 

        </Container>
       )}
</>
    )
}