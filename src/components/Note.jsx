import React from 'react'

const Note = ({text}) => {
  return (
    <div className='note'>
        <div>{text}</div>
        <div className='note_footer'>
        </div>
    </div>
  )
}

export default Note