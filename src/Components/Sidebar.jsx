import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from '../redux/UiSlice';
import { useEffect } from 'react';


const Sidebar = () => {
    const [username, setUsername] = useState('User225');
    const dispatch = useDispatch();
    

    return (
        <div className='container bg-gray-400 px-2  w-full md:w-1/5 p-2.5'>
            <div className='bg-red-300 mt-4 py-4 px-2 h-3/4 rounded-2xl flex flex-col'>
                <div className='flex flex-col items-center bg-red-600 py-4 px-4 h-1/3 rounded-lg justify-evenly'>
                    <h2>{username}</h2>
                    <h2>{console.log(username)}</h2>

                    <div className='h-8 w-8 bg-green-600'></div>
                </div>
                <div className='mt-4 ml-2 flex flex-col justify-between'>
                    <ul>
                        <li onClick={() => dispatch(setView('dashboard'))} className='py-1 my-1 hover:translate-x-2'> <Link to='/' />Dashboard</li>
                        <li onClick={() => dispatch(setView('projects'))} className='py-1 my-1 hover:translate-x-2'> <Link to='/projects' />Projects</li>
                        <li onClick={() => dispatch(setView('notes'))} className='py-1 my-1 hover:translate-x-2'> <Link to='/notes'>Notes</Link></li>
                        <li onClick={() => dispatch(setView('settings'))} className='py-1 my-1 hover:translate-x-2'> <Link to='/settings' />Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;