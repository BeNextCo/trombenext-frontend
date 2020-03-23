import React from 'react'
import { Header } from './Header'

export const LayoutPage = ({children}) => (
        <div>
            <Header/>
            {children}
        </div>
    )
