import React from 'react'

const Note = ({id, text, deleteHandler, editHandler}) => {
  return (
    <div className='note'>{text}
        <div className='note_footer'>
        <button className='note_save' onClick={() => deleteHandler(id)}>Delete</button>
        <button className='note_save' onClick={() => editHandler(id, text)}>Edit</button>
        </div>
    </div>
  )
}

export default Note