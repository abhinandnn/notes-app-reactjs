import React from 'react'

const Note = ({id, text, deleteHandler}) => {
  return (
    <div className='note'>
        <div className='note-body'>{text}</div>
        <div className='note_footer'>
        <button className='note_save' onClick={() => deleteHandler(id)}>Delete</button> &nbsp;
        </div>
    </div>
  )
}

export default Note