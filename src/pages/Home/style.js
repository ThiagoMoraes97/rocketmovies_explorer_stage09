import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;


`;

export const Content = styled.div`
  margin: 50px auto;
  max-width: 1220px;
  height: 100vh;
  padding: 0 100px;
  display: block;

  > header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 38px;

    h1{
      font-size: 32px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    button{
      max-width: 200px;
    }
  }

  > main {
    max-height: 75%;
    overflow-y: auto;
    padding-right: 10px;

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
