import styled from "styled-components";

export const Container = styled.a`
  cursor: pointer;
  color: ${({theme}) => theme.COLORS.GRAY_100};
  display: flex;
  align-items: center;
  gap: 8px;
`;