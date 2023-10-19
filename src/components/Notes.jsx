import React, { useState } from 'react';
import CreateNote from './Createnote';
import Note from './Note';

const Notes = () => {
    const [inputText, setInputText] = useState('');
    const [notes, setNotes] = useState([]);

    const saveHandler = () => {
        setNotes((prevNotes) => [
            ...prevNotes,
            {
                id: Date.now(),
                text: inputText,
            },
        ]);

        setInputText('');
    };

    return (
        <div className='notes'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                />
            ))}
            <CreateNote
                inputText={inputText}
                setInputText={setInputText}
                saveHandler={saveHandler}
            />
        </div>
    );
};

export default Notes;
