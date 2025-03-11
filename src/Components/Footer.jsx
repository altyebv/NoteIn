import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto p-4 text-center bg-slate-800 '>
            <p className='font-semibold text-white stroke-black'>&copy; {new Date().getFullYear()} Notephiny. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;