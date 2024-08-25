import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  border: none;
  padding: 18px;
  border-radius: 10px;
  resize: none;
  

  &::placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
`;
