import Header from './component/Header';
import styled from 'styled-components';
import { Route } from 'react-router-dom'

import './fonts/fonts.css'
import Main from './component/Main';
import AddForm from './component/AddForm';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/add">
          <AddForm />
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 1400px;
  margin: 60px auto;
`

export default App;