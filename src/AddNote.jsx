import { useState } from 'react';
import styled from 'styled-components';
import './index.css';

const NoteNew = styled.div`
  background-color: #188fa7;
  padding: 1rem;
  border-radius: 1rem;
`;

const NoteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.3rem;
`;

const Save = styled.button`
  background-color: #e1e1e1;
  border: none;
  padding: 1rem;
  border-radius: 15px;

  &:hover {
    background-color: #9dbbae;
    cursor: pointer;
  }
`;

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = (e) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <NoteNew>
      <textarea
        rows="10"
        cols="35"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      />
      <NoteFooter>
        <small>{characterLimit - noteText.length} Remaining</small>
        <Save onClick={handleSaveClick} onKeyPres={handleEnterPress}>
          Save
        </Save>
      </NoteFooter>
    </NoteNew>
  );
};

export default AddNote;
