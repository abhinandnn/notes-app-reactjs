import React, { useState } from 'react';
import CreateNote from './Createnote';
import Note from './Note';

const Notes = () => {
    const [inputText, setInputText] = useState('');
    const [notes, setNotes] = useState([]);
    const [editNote, setEdit] = useState(null);

    const editHandler = (id, text) => {
        setEdit(id);
        setInputText(text);
    };

    const saveHandler = () => {
        if (editNote) {
            setNotes((prevNotes) =>
                prevNotes.map((note) =>
                    note.id === editNote ? { ...note, text: inputText } : note
                )
            );
        } else {
            setNotes((prevNotes) => [
                ...prevNotes,
                {
                    id: Date.now(),
                    text: inputText,
                },
            ]);
        }

        // setInputText('');
        setEdit(null);
    };

    const deleteHandler = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className='notes'>
            {notes.map((note) =>
                editNote === note.id ? (
                    <CreateNote
                        key={note.id}
                        inputText={inputText}
                        setInputText={setInputText}
                        saveHandler={saveHandler}
                    />
                ) : (
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    />
                )
            )}
            {editNote === null ? (
                <CreateNote
                    inputText={inputText}
                    setInputText={setInputText}
                    saveHandler={saveHandler}
                />
            ) :
                null}
        </div>
    );
};

export default Notes;
