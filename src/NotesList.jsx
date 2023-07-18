import React from 'react';
import Note from './Note';
import styled from 'styled-components';

const NotesListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const NotesList = () => {
  return (
    <NotesListContainer
    // style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}
    >
      <Note />
      <Note />
      <Note />
      <Note />
    </NotesListContainer>
  );
};

export default NotesList;
