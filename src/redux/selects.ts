import { RootState } from "../redux/store";

  
  export const selectorNews=(state:RootState)=>state.news.news;
  export const selectorTotalPages=(state:RootState)=>state.news.totalPages;
  export const selectorTotPages=(state:RootState)=>state.notices.totalPages;
  export const selectorNotices=(state:RootState)=>state.notices.notices;
  export const selectorNoticesId=(state:RootState)=>state.notices.noticeId;
  export const selectorFavorite=(state:RootState)=>state.notices.isFavorite;
  export const selectorFriends=(state:RootState)=>state.friends.friends;
  export const selectorPets=(state:RootState)=>state.user.pets;
  export const selectorUserFull=(state:RootState)=>state.user.userFull;