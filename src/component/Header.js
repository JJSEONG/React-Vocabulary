import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <Title>
      <h1>Vocabulary</h1>
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'GmarketB';
    color: #fff;
    text-shadow: 
      0 0 3px #000,
      2px 2px 3px #000;
    font-style: italic;
  }
`

export default Header