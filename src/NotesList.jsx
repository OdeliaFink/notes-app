import React from 'react';
import Note from './Note';
import styled from 'styled-components';
import AddNote from './AddNote';

const NotesListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <NotesListContainer>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </NotesListContainer>
  );
};

export default NotesList;
