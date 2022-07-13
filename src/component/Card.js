import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useHistory } from 'react-router-dom'

const Card = () => {

  const history = useHistory();

  const new_card = useSelector((state) => state.voka.card);

  return (
    <CardWrap>
      {new_card.map((v, i) => {
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
              <p style={{color: "blue"}}>{v.ex}</p>
            </Ex>
            <Icon>
              <div>
                  <i>
                    <FontAwesomeIcon icon={ faCheck } />
                  </i>
              </div>
              <div>
                  <i onClick={() => history.push(new_card[i].id + "/edit")}>
                    <FontAwesomeIcon icon={ faPenToSquare } />
                  </i>
              </div>
              <div>
                  <i>
                    <FontAwesomeIcon icon={ faXmark } />
                  </i>
              </div>
            </Icon>
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
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`

const CardCon = styled.div`
  width: 420px;
  height: 200px;
  display: flex;
  position: relative;
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
const Icon = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 0 6px;
    font-size: 20px;
  }
  div > i {
    color: white;
    filter:drop-shadow(0 0 4px hotpink);
    cursor: pointer;
  }
  i:hover {
    color: rgba(255, 122, 165, 0.2);
  }
`

export default Card