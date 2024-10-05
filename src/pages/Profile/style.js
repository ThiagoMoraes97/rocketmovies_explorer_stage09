import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    background-color: ${({theme}) => theme.COLORS.WINE};
    height: 144px;
    display: flex;
    padding-left: 144px;
    
    > a {
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .profile_picture {
    width: 186px;
    height: 186px;
    margin: -90px 0 64px;
    position: relative;

    >label {
      background-color: ${({theme}) => theme.COLORS.PINK};
      width: 48px;
      height: 48px;
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 7px;
      bottom: 7px;

      > svg {
        width: 20px;
        height: 20px;
      }

      input{
        display: none;
      }

    }
    
    img {
      width: 186px;
      height: 186px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  > div:nth-child(3), div:nth-child(5) {
      margin-bottom: 24px;
    }
`;