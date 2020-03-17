import React from 'react'
import styled from 'styled-components';
import { PRIMARY } from '../styles/color';

export const Loading = ({text}) => (
        <div>
            {text && <Message>{text}</Message>}
            <Loader />
        </div>
    )

const size = '50px';


const Loader = styled.span`
    width: ${size};
    height: ${size};
    display: inline-block;
    vertical-align: middle;
    position: relative;

    border-radius: ${size};
    border: 6px solid transparent;
    border-top-color: ${PRIMARY};
    border-bottom-color: ${PRIMARY};
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
      border-top-color: ${PRIMARY};
      border-bottom-color: ${PRIMARY};
      opacity:0.6;
      animation: spinreverse 2s linear infinite;
    }
`

const Message = styled.div`
    margin-bottom: 16px;
`