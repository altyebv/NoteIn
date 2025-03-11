import React, { useState } from 'react';
import { useGetNotesQuery, useAddNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } from '../redux/apiSlice';

//Extract Logic to a Custom Hook

const NotesComponent = () => {
    const { data: notes, error, isLoading } = useGetNotesQuery();
    const [addNote] = useAddNoteMutation();
    const [updateNote] = useUpdateNoteMutation();
    const [deleteNote] = useDeleteNoteMutation();
    const [newNote, setNewNote] = useState('');

    const handleAddNote = async () => {
        await addNote({ content: newNote });
        setNewNote('');
    };

    const handleUpdateNote = async (id, content) => {
        await updateNote({ id, content });
    };

    const handleDeleteNote = async (id) => {
        await deleteNote(id);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading notes</div>;

    return (
        <div>
            <h1>Notes</h1>
            <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a new note"
            />
            <button onClick={handleAddNote}>Add Note</button>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <input
                            type="text"
                            value={note.content}
                            onChange={(e) => handleUpdateNote(note.id, e.target.value)}
                        />
                        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesComponent;
