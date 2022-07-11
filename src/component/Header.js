import React from 'react'
import styled from "styled-components"
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory();
  return (
    <Title>
      <h1 onClick = {
        () => {history.push('/')}
      } style ={{cursor: "pointer"}}>Vocabulary</h1>
    </Title>
  )
}

const Title = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'GmarketB';
    color: #fff;
    text-shadow: 
      0 0 3px hotpink,
      2px 2px 3px pink;
    font-style: italic;
  }
`

export default Header