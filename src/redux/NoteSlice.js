import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: []
};


const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload);
        },
        markAsDone: (state, action) => {
            const note = state.notes.find(note => note.id === action.payload);
            if (note) {
                note.done = true;
            }
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        editNote: (state, action) => {
            const { id, newContent } = action.payload;
            const note = state.notes.find(note => note.id === id);
            if (note) {
                note.content = newContent;
            }
        }
    }
});

export const { addNote, markAsDone, deleteNote, editNote } = noteSlice.actions;

export default noteSlice.reducer;