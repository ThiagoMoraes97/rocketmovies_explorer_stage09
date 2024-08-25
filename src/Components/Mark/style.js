import styled from "styled-components";

export const Container = styled.div`
  padding-right: 16px;
  border-radius: 10px;
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
  border: ${({theme, isNew}) => isNew ? `2px dotted ${theme.COLORS.GRAY_100}` : "none"};
  display: flex;
  align-items: center;
  margin: 0 24px 16px 0;
  max-width: 185px; 
  > input {
    border: none;
    background: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};
    padding: 16px;
    outline: none;
    width: 100%; 
    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }

  > button{
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.PINK};
    cursor: pointer;
  }
`;
