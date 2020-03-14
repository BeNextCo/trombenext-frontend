import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function LayoutPage({children}) {
    return (
        <LayoutPageContainer>
            <Header/>
            {children}
        </LayoutPageContainer>
    )
}

const LayoutPageContainer = styled.div`
`

export default LayoutPage
