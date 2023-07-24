import React from 'react';
// import { MdDeleteForever } from 'react-icons/md';

const Note = ({ text, date, id, handleDeleteNote }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#D5D6AA',
          padding: '1rem',
          height: '17rem',

          borderRadius: '5%',
        }}
      >
        <div
          style={{
            // border: '1px solid black',
            minHeight: '16rem',
            backgroundColor: '#E2DBBE',
            opacity: '0.6',
            borderRadius: '5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            whiteSpace: 'pre-wrap  ',
            paddingInline: '1rem',
          }}
        >
          <span style={{ paddingTop: '1rem', fontSize: '2rem' }}>{text}</span>
          <div
            className="note-footer"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <small>{date}</small>
            <i
              class="fa fa-trash"
              onClick={() => handleDeleteNote(id)}
              className="delete-icon"
              size="1.3em"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
