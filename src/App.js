import './App.css';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import { nanoid } from 'nanoid';
import Note from './Note';
import NotesList from './NotesList';
import styled from 'styled-components';
import { useState } from 'react';
import AddNote from './AddNote';

const Container = styled.div`
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  min-height: 100vh;
`;

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '10/2/2023',
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '12/2/2023',
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '5/7/2023',
    },
  ]);
  return (
    <Container>
      <NavBar />
      <NotesList notes={notes} />
      {/* <AddNote /> */}
    </Container>
  );
}

export default App;
