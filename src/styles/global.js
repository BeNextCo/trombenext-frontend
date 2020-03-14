import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }
  @keyframes spinreverse {
  from {
    transform : rotate(0deg);
    }
  to {
    transform : rotate(-360deg);
  }
}
`

export const COLOR = {
  PRIMARY: '#EF7F19',
  SECONDARY: '#EB9444',
  GREY_LIGHTHEN: '#E7E2DE',
  GREY: '#4F453C',
  BLACK: '#0F0801'
}