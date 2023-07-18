import { useState } from 'react';
import styled from 'styled-components';
import './index.css';

const NoteNew = styled.div`
  background-color: yellow;
`;

const NoteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Save = styled.button`
  background-color: #e1e1e1;
  border: none;
  padding: 0.8rem 1.3rem;
  border-radius: 15px;
`;

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
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
        <Save className="save" onClick={handleSaveClick}>
          Save
        </Save>
      </NoteFooter>
    </NoteNew>
  );
};

export default AddNote;
