import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    cursor: pointer;

    border: none;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 10px;
    font-weight: 500;
`;