import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 99;
  right: 10px;
  bottom: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 5px 10px #bbb;
  border-radius: 5px;
  
  display: flex;
  align-items: flex-start;
  justify-content: center;
  
  p{
    padding: 5px 10px;
  }
`;

const IconStyled = styled(AiFillCheckCircle)`
  font-size: calc(var(--size) + .5em);
  color: #22961E;
`;

export function FlashMessage({message}){
  return (
    <Container>
      <IconStyled /> <p>{message}</p>
    </Container>
  );
}

