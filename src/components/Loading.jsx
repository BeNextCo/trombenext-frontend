import React from 'react'
import styled from 'styled-components';

function Loading({text}) {
    return (
        <LoaderContainer>
            {text && <Message>{text}</Message>}
            <Loader />
        </LoaderContainer>
    )
}

const size = '50px';
const color = '#ef7f19';


const Loader = styled.span`
    width: ${size};
    height: ${size};
    display: inline-block;
    vertical-align: middle;
    position: relative;

    border-radius: ${size};
    border: 6px solid transparent;
    border-top-color: ${color};
    border-bottom-color: ${color};
    animation: spin 1s linear infinite;
    &:after{
      content:'';
      position: absolute;
      top: 5px;
      left: 5px;
      bottom: 5px;
      right: 5px;
      border-radius:${size};
      border: 6px solid transparent;
      border-top-color: ${color};
      border-bottom-color: ${color};
      opacity:0.6;
      animation: spinreverse 2s linear infinite;
    }
`

const LoaderContainer = styled.div`
`

const Message = styled.div`
    margin-bottom: 16px;
`


export default Loading
