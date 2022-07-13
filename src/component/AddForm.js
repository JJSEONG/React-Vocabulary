import React from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCard, addVokaFB, updateVokaFB } from '../redux/modules/voka'
import { useSelector } from 'react-redux'

const AddForm = (props) => {

  const params = useParams()
  const new_card = useSelector((state) => state.voka.card);

  const arr = new_card.find((card) => {
    if(card.id === params.id) return card
  })
  console.log(new_card)
  console.log(params.id)
  console.log(arr)
  
  const dispatch = useDispatch();
  const voka_text = React.useRef(null);
  const desc_text = React.useRef(null);
  const ex_text = React.useRef(null);

  const history = useHistory();

  const addNewCard = (e) => {
    // dispatch (
    //   createCard
    //   ({
    //     word : voka_text.current.value,
    //     mean : desc_text.current.value,
    //     ex : ex_text.current.value
    //   })
    // )

    let voka = { 
      word: voka_text.current.value,
      mean: desc_text.current.value,
      ex: ex_text.current.value
    }

    if(voka_text.current.value === '') {
      alert('단어를 입력해주세요!')
    } else if(desc_text.current.value === '') {
      alert('의미를 입력해주세요!')
    } else if(ex_text.current.value === '') {
      alert('예문을 입력해주세요!')
    } else {
      dispatch(addVokaFB(voka));
      history.push("/")
    }
    e.preventDefault()
  }

  const updateCard = (e) => {
    
    e.preventDefault()

    let voka = {
      word: voka_text.current.value,
      mean: desc_text.current.value,
      ex: ex_text.current.value
    }

    if(voka_text.current.value === '') {
      alert('단어를 입력해주세요!')
    } else if(desc_text.current.value === '') {
      alert('의미를 입력해주세요!')
    } else if(ex_text.current.value === '') {
      alert('예문을 입력해주세요!')
    } else {
      dispatch(updateVokaFB(voka, params.id));
      history.push("/")
    }

  }

  return (
    <Container>
      <SubTitle>{ arr ? "단어 수정하기" : "단어 추가하기" }</SubTitle>
      <form onSubmit = { (e) => (arr ? updateCard(e) : addNewCard(e)) } >
        <Input>
          <p>단어</p>
          <input ref={voka_text} type="text" maxLength="30" defaultValue = { arr ? arr.word : "" } />
        </Input>
        <Input>
          <p>의미</p>
          <input ref={desc_text} type="text" maxLength="30" defaultValue = { arr ? arr.mean : "" } /> 
        </Input>
        <Input>
          <p>예문</p>
          <input ref={ex_text} type="text" maxLength="60" defaultValue = { arr ? arr.ex : "" } /> 
        </Input>
        <SaveBtn>{arr ? "수정하기" : "저장하기"}</SaveBtn>
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
  padding: 20px;
  border: 2px solid pink;
  border-radius: 20px;
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
    color: #fff;
    margin: 30px 0 10px;
  }
  input {
    width: 300px;
    height: 20px;
    border: none;
    background-color: transparent;
    color: #fff;
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
  color: white;
  cursor: pointer;
  &:hover {
    background-color: pink;
    color: white;
  }
`

export default AddForm