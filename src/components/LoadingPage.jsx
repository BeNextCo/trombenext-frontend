import React from 'react'
import styled from 'styled-components'
import { Loading } from './Loading'
import { PRIMARY } from '../styles/color'

export const LoadingPage = () => (
        <LoadingPageContainer>
            <Title>Trombenext</Title>
            <Loading text="Chargement de l'application"/>
        </LoadingPageContainer>
    )
  
const LoadingPageContainer = styled.div`
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const Title = styled.h1`
  position: relative;
  font-size: 100px;
  letter-spacing: -5px;
  color: ${PRIMARY};
`