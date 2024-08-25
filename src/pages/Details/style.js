import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "main";

  > main{
    padding: 0 50px;
    grid-area: main;
    overflow-y: auto;
    max-width: 1115px;
    margin: 40px auto;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: none;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.COLORS.PINK};
      border-radius: 10px;
      height: 8px;
    }
  }
`;

export const Main = styled.div`

  > a:nth-child(1) {
    color: ${({theme}) => theme.COLORS.PINK};
    margin-bottom: 24px;
  }

  .movie_info{
    display: flex;
    align-items: center;
    gap: 19px;
    margin-bottom: 24px;

    > h1{
      font-size: 36px;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    > ul {
      font-size: 20px;
    }
  }

  .note_info{
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
    color: ${({theme}) => theme.COLORS.WHITE};

    .user_info{
      display: flex;
      align-items: center;
      gap: 8px;

      img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid ${({theme}) => theme.COLORS.GRAY_500};
      } 
    } 

    .time_info{ 
      display: flex;
      align-items: center;
      gap: 6px;
      
      > svg{
        color: ${({theme}) => theme.COLORS.PINK};
      }
    }
  }

  .movie_tags{
    margin-bottom: 40px; 
     > span{
      background-color: ${({theme}) => theme.COLORS.WINE};
     }
  }

  p{
    text-align: justify;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;

