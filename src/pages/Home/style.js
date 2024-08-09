import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  margin: 50px auto;
  max-width: 1170px;
  padding: 0 50px;

  > header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
      font-size: 32px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    button{
      max-width: 200px;
    }
  }
`;
