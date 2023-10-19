import React from 'react'


const CreateNote = ({inputText, setInputText, saveHandler}) => {
    
return (
    <div className='note'>
        <textarea
        placeholder='Type...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={5}
        >
        </textarea>
        <div className='note_footer'>
            <button className='note_save' onClick={saveHandler}>Save</button>
        </div>
    </div>
)
}

export default CreateNote