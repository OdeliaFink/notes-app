import './App.css';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import Note from './Note';
import NotesList from './NotesList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: auto;

  min-height: 100vh;
`;

function App() {
  return (
    <Container className="App">
      <NavBar />
      <NotesList />
    </Container>
  );
}

export default App;
