import React, { useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const AddForm = (props) => {
  
  const voka_text = React.useRef(null);
  const desc_text = React.useRef(null);
  const ex_text = React.useRef(null);

  const history = useHistory();

  window.setTimeout(() => {
    console.log(voka_text.current.value)
    console.log(desc_text.current.value)
    console.log(ex_text.current.value)
  }, 5000);

  return (
    <Container>
      <SubTitle>단어 추가하기</SubTitle>
      <form>
        <Input>
          <p>단어</p>
          <input ref={voka_text} type="text" />
        </Input>
        <Input>
          <p>의미</p>
          <input ref={desc_text} type="text" />
        </Input>
        <Input>
          <p>예문</p>
          <input ref={ex_text} type="text" />
        </Input>
        <SaveBtn type="submit" onClick = {
          () => { history.push("/") }
        }>저장하기</SaveBtn>
      </form>
    </Container>
  )
}

const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px auto;
`

const SubTitle = styled.h2`
  font-family: 'GmarketM';
  color: white;
  text-shadow: 
    0px 0 2px pink,
    2px 0 4px hotpink;
`

const Input = styled.div`
  font-family: 'GmarketL';
  width: 300px;
  margin: 0 auto;
  p {
    font-size: 20px;
    margin: 30px 0 10px;
  }
  input {
    width: 300px;
    height: 20px;
    border: none;
    border-bottom: 2px solid pink;
    outline: none;
  }
`

const SaveBtn = styled.button`
  width: 140px;
  height: 40px;
  font-family: 'GmarketM';
  font-size: 16px;
  display: block;
  margin: 30px auto;
  border: none;
  outline: none;
  background-color: transparent;
  border: 2px solid pink;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: pink;
    color: white;
  }
`

export default AddForm