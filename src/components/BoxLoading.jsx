import React from 'react';
import styled, { keyframes } from 'styled-components';
import {AiOutlineLoading} from 'react-icons/ai';

const ContainerLoading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 25;
    background-color: rgba(255,255,255, .7);
    display: flex;
    align-items: center;
    justify-content:center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIconStyled = styled(AiOutlineLoading)`
    font-size: calc(var(--size) + 4em);
    color: var(--color-1);
    animation: ${rotate} 1.5s linear infinite;
`;

export function BoxLoading(){

    return (<ContainerLoading>
        <LoadingIconStyled /> 
        </ContainerLoading>);
}
