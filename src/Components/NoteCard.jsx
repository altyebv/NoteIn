import React, { useEffect, useState } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { MdDelete, MdEdit } from "react-icons/md";



const NoteCard = ({ note }) => {



    return (
        <div className="flex px-2 py-2 bg-slate-500 justify-between hover:bg-slate-400 rounded-xl">
            <div className="flex flex-col p-2 ">
                <div >
                    <h3 className='text-lg font-bold text-center mb-2'>{note.title}</h3>
                    <p className='text-xs bg-slate-100 p-3 rounded-lg font-semibold'>{note.content} </p>
                    <p className='text-xs font-semibold text-center mt-3'>date</p>
                </div>

            </div>
            <div className='flex flex-col px-2 bg-yellow-200 justify-center rounded-lg'>
                <ul className=" text-xs font-semibold cursor-pointer ">
                    <li className='text-xl font-bold mb-4 hover:text-black hover:scale-125'> <CiCircleCheck /> </li>
                    <li className='text-xl font-bold hover:text-red-500 hover:scale-125 '> <MdDelete /> </li>
                    <li className='text-xl font-bold mt-4 hover:text-blue-300 hover:scale-125'> <MdEdit /> </li>
                </ul>
            </div>
        </div>
    );
};

export default NoteCard;