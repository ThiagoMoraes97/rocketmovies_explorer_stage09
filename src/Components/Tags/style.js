import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({theme}) => theme.COLORS.GRAY_300};
  color: ${({theme}) => theme.COLORS.WHITE_200};
  padding: 5px 16px;
  border-radius: 8px;
  font-size: 12px;
  margin-right: 8px;
`;