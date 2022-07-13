import React from 'react';
import Header from './component/Header';
import styled from 'styled-components';
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loadVokaFB } from './redux/modules/voka';

import './fonts/fonts.css'
import Main from './component/Main';
import AddForm from './component/AddForm';

import { db } from './firebase'
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadVokaFB());

    // 추가하기
    // addDoc(collection(db, "voka"), {
    // voka_text: "peach", desc_text: "복숭아", ex_text: "복숭아는 맛있어"
    // })

    // 수정하기
    // const docRef = doc(db, "voka", "ed4pfrR3qWcuwRFW1Sjx");
    // updateDoc(docRef, {ex_text: "물렁 복숭아"});

    // 삭제하기
    // const docRef = doc(db, "voka", "FLtC5owXlgRk5IJHzNhq");
    // deleteDoc(docRef);
    
  }, [])

  return (
    <Wrap>
      <Header />
      <Container>
        <Route path="/" exact component={Main} />
        <Route path="/add" component={AddForm} />
        <Route path="/:id/edit" component={AddForm} />
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 60px auto;
`

export default App;