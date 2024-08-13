import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 123px;
  width: 100%;
  height: 116px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  grid-area: header;

  > h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.PINK};
    margin-right: 64px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-left: 64px;
  gap: 9px;
  min-width: 198px;

  .user_info{
    display: flex;
    flex-direction: column;

    span{
      font-size: 14px;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    > a{
      align-self: end;
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid ${({theme}) => theme.COLORS.GRAY_500};
  }

`;