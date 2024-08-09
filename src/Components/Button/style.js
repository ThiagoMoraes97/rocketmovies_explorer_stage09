import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    justify-content: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    border: none;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 10px;
    font-weight: 500;
`;