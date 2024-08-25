import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "main";
`;

export const Form = styled.form`
  width: 1140px;
  padding: 0 30px;
  margin: 40px auto;
  overflow-y: auto;
  grid-area: main;

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

  > header {
    a{
      color: ${({theme}) => theme.COLORS.PINK};
      margin-bottom: 24px;
    }

    h1{
      color: ${({theme}) => theme.COLORS.WHITE};
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 40px;
    }
  }

  > main {
    .movie_info{
      display: flex;
      gap: 40px;
      margin-bottom: 32px;
    }

    textarea{
      margin-bottom: 40px;
    }

    h2{
      font-size: 20px;
      color: ${({theme}) => theme.COLORS.GRAY_400};
      margin-bottom: 24px;
    }

    .tags{
      background-color: ${({theme}) => theme.COLORS.BLACK};
      width: 100%;
      padding: 16px 0 0 30px;
      margin-bottom: 40px;
      border-radius: 8px;
      display: flex;
      flex-wrap: wrap;
      
    }

    .buttons{
      display: flex;
      gap: 40px;

      button:nth-child(1){
        background-color: ${({theme}) => theme.COLORS.BLACK};
        color: ${({theme}) => theme.COLORS.PINK};
      }
    }
  }
`;
