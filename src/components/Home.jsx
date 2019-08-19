import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomeContainer = styled.div``

const Title = styled.h1`
  display: inline;
  position: relative;
  font-size: 100px;
  letter-spacing: -5px;
  color: rgba(0, 0, 255, 0.5);
  opacity: 0.7;
`

const StyledLink = styled(Link)`
  color: palevioletred;
  font-size: 2em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: block;
  text-decoration: none;
`

const Home = () => {
  const [helloWorld, setHelloWorld] = useState('Loading...')

  useEffect(() => {
    axios.get('http://localhost:5000').then(result => setHelloWorld(result.data))
  }, [])

  return (
    <HomeContainer>
      <Title>Trombenext</Title>
      <h2>{helloWorld}</h2>
      <StyledLink to="/">Link</StyledLink>
    </HomeContainer>
  )
}

export default Home
