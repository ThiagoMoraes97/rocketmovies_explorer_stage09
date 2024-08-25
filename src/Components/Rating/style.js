import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  list-style: none;
  gap: 6px;

  > li {
    color: ${({theme}) => theme.COLORS.PINK};
    background-color: none;
  }
`;