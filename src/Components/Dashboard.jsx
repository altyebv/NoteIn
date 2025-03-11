import React from 'react';
import NoteCard from './noteCard';
import { useEffect, useState } from 'react';


const Dashboard = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('http://localhost:5111/api/notes/');
                if (!response.ok) {
                    throw new Error("Failed to fetch notes");
                }
                const data = await response.json();
                const final = await data.notes;

                setNotes(final);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchNotes();
    }, []);

    return (
        <div className='container px-4  w-full bg-blue-300'>
            <div className='bg-blue-500 mx-2 my-4 p-4 rounded-2xl'>
                <h1 className='py-1 mt-4 mx-4 font-semibold text-2xl '>Dashboard</h1>
                <p>Welcome to your dashboard.</p>
            </div>
            <div className='bg-yellow-500 h-1/5 my-4 p-4 mx-2 rounded-2xl grid grid-cols-4 gap-2 justify-center text-center'>
                <div className='bg-slate-300 rounded-lg'>
                    <h3 className='font-semibold text-lg '>Finished</h3>
                    <p className='mt-4 text-2xl font-bold text-blue-500'>3</p>
                </div>
                <div className='bg-slate-300 rounded-lg'>
                    <h3 className='font-semibold text-lg '>To-do</h3>
                    <p className='mt-4 text-2xl font-bold text-blue-500'>3</p>
                </div>
                <div className='bg-slate-300 rounded-lg'>
                    <h3 className='font-semibold text-lg '>all</h3>
                    <p className='mt-4 text-2xl font-bold text-blue-500'>3</p>
                </div>
                <div className='bg-slate-300 rounded-lg'>
                    <h3 className='font-semibold text-lg '>projects</h3>
                    <p className='mt-4 text-2xl font-bold text-blue-500'>3</p>
                </div>
            </div>

            <div className='flex mx-2 my-4 p-4 rounded-2xl justify-between bg-red-500 '>
                <div className='grid grid-cols-2 grid-rows-1 gap-1 h-full'>
                        {notes.map((note) => (
                            <NoteCard key={note.id} note={note} />
                        ))}
                </div>
                <div className='bg-slate-300 py-2 px-4 rounded-lg w-3/5 mx-2'>
                    <h1>New note</h1>
                    <p>Here are your notes.</p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;