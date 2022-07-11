import Header from './component/Header';
import styled from 'styled-components';
import './fonts/fonts.css'

function App() {
  return (
    <Wrap>
      <Header />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 6000px;
`

export default App;