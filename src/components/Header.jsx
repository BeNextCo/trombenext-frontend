import React from 'react'
import styled from 'styled-components'
import GoogleLogoutButton from './GoogleLogoutButton'
import { COLOR } from '../styles/global'

function Header() {
    return (
        <HeaderContainer>
            <Title>Trombenext</Title>
            <GoogleLogoutButton/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 60px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding: 8px;
`

const Title = styled.div`
    position: relative;
    font-size: 32px;
    letter-spacing: -2px;
    color: ${COLOR.PRIMARY};
  `

export default Header
