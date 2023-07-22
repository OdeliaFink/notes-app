import './App.css';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import { nanoid } from 'nanoid';
import Note from './Note';
import NotesList from './NotesList';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import AddNote from './AddNote';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <NavBar />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </Container>
  );
}

export default App;
