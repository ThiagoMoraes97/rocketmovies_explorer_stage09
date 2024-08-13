import styled from "styled-components";

export const Container = styled.div`
  max-width: 1121px;
  margin: 0 auto 24px;
  padding: 32px;
  background-color: ${({theme}) => theme.COLORS.WINE};
  border-radius: 16px;
  cursor: pointer;
  text-align: start;
  font-size: 16px;

  > header {
    h1{
      font-size: 24px;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.WHITE};
      margin-bottom: 8px;
    }

    ul {
      display: flex;
      list-style: none;
      gap: 6px;

      li{
        color: ${({theme}) => theme.COLORS.PINK};
        background-color: none;
      }

    }
  }

  p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    margin: 15px 0 25px;
    color: ${({theme}) => theme.COLORS.GRAY_400};
  }
`;