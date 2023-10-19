import React from 'react'
const Header = ({clearAllNotes,addNewNote}) => {
return (
    <div className='header'> 
        <h1 className='title'>Notes App</h1>
        <div className=''>
        <button className='clear' onClick={addNewNote}>Add Note</button> &nbsp;
        <button className='clear' onClick={clearAllNotes}>Clear All</button>
        </div>
    </div>
)
}

export default Header