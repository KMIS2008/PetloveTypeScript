import { Title } from "../../components/Title/Title";
import { Pagination } from "../../components/Pagination/Pagination";
import {fetchnotices} from '../../redux/operations';
import {NoticesList} from '../../components/NoticesList/NoticesList';
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectorNotices} from '../../redux/selects';
import {NoticesFilters} from '../../components/NoticesFilters/NoticesFilters';
import { AppDispatch } from "../../redux/store";
import React from "react";

interface NoticeProps{
  imgURL:string,
  title:string, 
  popularity:string, 
  comment:string, 
  name:string, 
  birthday:string, 
  species:string, 
  category:string, 
  sex:string, 
  _id:string
}


const useAppDispatch:()=>AppDispatch=useDispatch;

export default function Notices(){
    const dispatch=useAppDispatch();
    const [isPageNumber, setIsPageNumber] = useState(1);
    const notices: NoticeProps[]  = useSelector(selectorNotices) || [];

    const handleChangeNewPage=(number:number)=>{
        setIsPageNumber(number);
    }

    useEffect(()=>{
      dispatch(fetchnotices(isPageNumber))
    }, [dispatch, isPageNumber])
    return(
        <>
          <Title name="Find your favorite pet"/>
          <NoticesFilters notices={notices}/>
          <NoticesList notices={notices}  trash={false}/>
          <Pagination handleChangeNewPage={handleChangeNewPage} currentPage={isPageNumber}/>
        </>
    )
}