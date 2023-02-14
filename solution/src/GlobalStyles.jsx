import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @media screen and (min-width: 768px){
    :root{font-size: 20px;}
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    background-color: inherit;
    color: inherit;      
    font-family: Josefin Sans, sans-serif;
      list-style: none;
  }
    body{
    background-color:${({ theme }) => theme.colors.bgSecundary};  
    min-height: 100vh;
    width: 100%;
    position: relative;
    height: max-content;
    display: flex;
    flex-direction: column;
    }
`;
