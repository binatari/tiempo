import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ToggleButton from '../../Utils/ToggleButton/ToggleButton';
import { Context } from '../../Context/MainContext';

const Header = () => {
    const location = useLocation();
    const { isDark } = useContext(Context)
    return (

        <header className={`${isDark ? 'text-gray-100 bg-gray-800 ' : 'bg-gray-100 text-gray-800'} text-lg p-4`}>
            <div className=" lg:container flex justify-between h-10 lg:h-16 mx-auto items-center">
                <NavLink className="flex items-center p-2">
                    <h1>Tiempo</h1>
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About Us</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact Us</NavLink>
                    </li>

                </ul>
                <div className='flex items-center gap-x-4'>
                    <div className="justify-end lg:justify-start items-center p-4  flex">
                        <ToggleButton />
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`${isDark ? 'text-gray-100' : ' text-gray-800'} w-6 h-6`}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>

    );
};

export default Header;