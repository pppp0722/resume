import styled from 'styled-components';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

const App = () => {
  return (
    <Container>
      <Header/>
      <Body/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 960px) {
    width: 960px;
  }
`

export default App;
