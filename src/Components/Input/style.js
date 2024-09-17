import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-bottom: 8px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    border-radius: 10px;
    display: flex;
    align-items: center;

    > input{
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: transparent;
        border: none;
        padding: 18px;
        outline: none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

       
    }

    .icon {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-left: 16px;
    }
`;