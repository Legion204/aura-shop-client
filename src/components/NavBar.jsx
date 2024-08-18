import React from 'react';
import useAuth from '../Hooks/useAuth';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ drawerOpen }) => {
    const { userLogout, user } = useAuth();
    return (
        <div className="navbar bg-base-100">
            <div className="flex items-center flex-1">
                <label className='lg:hidden' htmlFor={drawerOpen}><GiHamburgerMenu className='text-xl'></GiHamburgerMenu></label>
                <a className="btn btn-ghost text-3xl font-semibold text-blue-500 pb-1">Aura Shop</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full text-center bg-blue-500">
                            <h1 className='text-xl p-1 text-white'>{user ? user?.displayName?.charAt(0) : '?'}</h1>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className='text-blue-500 text-xl'>{user?.displayName}</li>
                        <li><a onClick={userLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;