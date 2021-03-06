import { createGlobalStyle } from 'styled-components'

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
