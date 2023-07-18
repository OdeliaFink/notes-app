import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
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
          <span>first note</span>
          <div className="note-footer">
            <small>13/1/2001</small>
            <MdDeleteForever size="1.3rem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
