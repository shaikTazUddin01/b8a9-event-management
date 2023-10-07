import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const NavItem =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/order'}>My Order</NavLink></li>
            <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
            <li><NavLink to={'/login'}>Login</NavLink></li>
        </>
    return (
        // bg-[#ff466e] text-white
        <div className='bg-[#FF325E] text-white'>
            <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown z-10  text-white">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-[#ff466e]">
                       {NavItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItem}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
        </div>

    );
};

export default Navbar;