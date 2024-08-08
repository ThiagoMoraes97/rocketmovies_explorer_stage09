import styled from "styled-components";
const backgroundColor = "rgba(28, 27, 30, 0.70)"


export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Form = styled.form`
    padding: 0 134px;
    text-align: center;
    

    > header{
       
        h1{
            font-size: 48px;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.PINK};
        }

        p{
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_200};
            text-align: start;
            margin-bottom: 48px;
        }
    }
    

    > main{
        h2{ 
            font-size: 24px;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.WHITE};
            text-align: start;
            margin-bottom: 48px;
        }

        button{
            margin-top: 24px;
        }

        margin-bottom: 42px;
    }

    > a{ 
       
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.PINK};
        
    }
    
`;

export const Background = styled.div`
    width: 100%;
    background: ${backgroundColor};
   > img{
        object-fit: cover;
        width: 100%;
        height: 100vh;
        display: block;
        z-index: -1;
        position: relative;
   }
`;