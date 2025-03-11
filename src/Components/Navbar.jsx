import React from 'react';
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { FaBell, FaSearch } from "react-icons/fa";




const Navbar = () => {
    return (
        <nav>
            <div className='container mx-auto py-6 px-2 md:px-16 lg:px-24 flex h-9 bg-slate-800 justify-between items-center' >
            <div className="text-lg font-bold text-white">
                    <Link to='/' >Notephiny</Link>
                </div>
                <div className='flex justify-evenly items-center'>
                    <CiMenuBurger className="text-xl font-bold text-white"/>
                    <h2 className="text-lg font-bold text-white" >dashboard</h2>
                </div>
                <div className='relative flex justify-between items-center' >
                    <input type="text" name="" placeholder='search a project...' 
                    className='w-full rounded-2xl py-1 px-2 border bg-slate-100 placeholder-slate-600'/>
                    <FaSearch className='absolute right-1 text-gray-400'/>
                </div>
                <div className='flex justify-between items-center gap-2 text-yellow-200'>
                    <FaBell />
                    <p className='font-semibold text-lg text-white'>username</p>
                    <div className='h-5 w-5 bg-blue-500 rounded-full '></div>
                    <img src="" alt=""
                    className='rounded-full' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;