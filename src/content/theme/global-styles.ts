import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.primary.bg};
    color: ${({ theme }) => theme.colors.primary.fg};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary.bg};
      color: ${({ theme }) => theme.colors.secondary.fg};
    }
  }
`;
