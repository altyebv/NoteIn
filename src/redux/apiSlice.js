import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5111/api/' }),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => 'notes',
        }),
        addNote: builder.mutation({
            query: (newNote) => ({
                url: 'notes',
                method: 'POST',
                body: newNote,
            }),
        }),
        updateNote: builder.mutation({
            query: (updatedNote) => ({
                url: `notes/${updatedNote.id}`,
                method: 'PATCH',
                body: updatedNote,
            }),
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `notes/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetNotesQuery, useAddNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } = apiSlice;