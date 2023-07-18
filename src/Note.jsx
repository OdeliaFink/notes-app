import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ text, date, id }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'grey',
          padding: '1rem',
          height: '17rem',

          borderRadius: '5%',
        }}
      >
        <div
          style={{
            border: '1px solid black',
            minHeight: '16rem',
            backgroundColor: '#af93d4',
            opacity: '0.6',
            borderRadius: '5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            whiteSpace: 'pre-wrap  ',
          }}
        >
          <span>{text}</span>
          <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever size="1.3rem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
