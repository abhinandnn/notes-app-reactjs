import React, { useState } from 'react';
import CreateNote from './Createnote';
import Note from './Note';
import Header from './Header';
const Notes = () => {
    const [inputText, setInputText] = useState('');
    const [notes, setNotes] = useState([]);
    const [editNote, setEdit] = useState(null);
    const [n, setNew] = useState(false);

    const editHandler = (id, text) => {
        setEdit(id);
        setInputText(text);
    };
    

    const saveHandler = () => {
        if (editNote) {
            if(inputText){
            setNotes((prevNotes) =>
                prevNotes.map((note) =>
                    note.id === editNote ? { ...note, text: inputText } : note
                )
            );}
        } else {
            if(inputText)
            {setNotes((prevNotes) => [
                ...prevNotes,
                {
                    id: Date.now(),
                    text: inputText,
                },
            ]);}
        }
        setNew(false);
        setInputText('');
        setEdit(null);
    };

    const deleteHandler = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };
    const clearAllNotes = () => {
        setNotes([]);
        setInputText('');
        setNew(false);
    };
    const addNewNote = () => {
        setNew(true);
    }
    return (
        <>
        <Header
                clearAllNotes={clearAllNotes}
                addNewNote={addNewNote}
                    />
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
            {n ? (
                    <CreateNote
                        inputText={inputText}
                        setInputText={setInputText}
                        saveHandler={saveHandler}
                    />):null}
        </div>
        </>
    );
};

export default Notes;
