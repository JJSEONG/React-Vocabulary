import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Card = () => {
  const new_card = useSelector((state) => state.voka.card);
  console.log(new_card)

  return (
    <CardWrap>
      {new_card.map((v, i) => {
        // console.log(v)
        return (
          <CardCon key = {i}>
            <Voka>
              <h4>단어</h4>
              <p>{v.word}</p>
            </Voka>
            <Desc>
              <h4>의미</h4>
              <p>[{v.mean}]</p>
            </Desc>
            <Ex>
              <h4>예문</h4>
              <p>{v.ex}</p>
            </Ex>
          </CardCon>
        )
      })}
    </CardWrap>
  )
}

const CardWrap = styled.div`
  max-width: 1300px;
  margin: 100px auto;
  padding: 0 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`

const CardCon = styled.div`
  width: 420px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid pink;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 10px 20px;
  &:hover {
    box-shadow: 0 0 8px rgba(255, 113, 181, 0.4);
  }
  h4 {
    font-family: 'GmarketM';
    font-size: 14px;
    color: white;
    text-shadow: 
      0 0 1px hotpink,
      1px 1px 2px pink;
    margin: 0;
  }
  p {
    font-family: 'GmarketL';
    font-size: 12px;
    margin: 4px 0;
  }
`
const Voka = styled.div`
  margin: 6px 0;
`
const Desc = styled.div`
  margin: 6px 0;
`
const Ex = styled.div`
  margin: 6px 0;
`

export default Card