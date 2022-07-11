import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { useHistory } from 'react-router-dom'

const Main = () => {
  const history = useHistory();

  return (
    <MainWrap>
      <Card />
      <Add onClick = {
        () => history.push('/add')}></Add>
    </MainWrap>
  )
}

const MainWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`

const Add = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 40px;
  height: 40px;
  background-color: pink;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: rotate(90deg);
  }
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    left: calc(50% - 10px);
    width: 20px;
    height: 4px;
    border-radius: 14px;
    background-color: white;
  }
  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 2px);
    width: 4px;
    height: 20px;
    border-radius: 14px;
    background-color: white;
  }
`

export default Main;