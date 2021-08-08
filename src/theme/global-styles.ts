import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.body};
    margin: 0;
    padding: 0;
    transition: all 0.5s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.header};
  }

  section {
    margin: 2rem auto;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font.body};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.primary.normal.bg};
    color: ${({ theme }) => theme.colors.primary.normal.fg};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.darker.fg};
      color: ${({ theme }) => theme.colors.primary.darker.fg};
    }
  }
`;
