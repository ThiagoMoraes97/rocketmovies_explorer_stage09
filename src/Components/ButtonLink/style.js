import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  cursor: pointer;
  color: ${({theme}) => theme.COLORS.GRAY_100};
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;