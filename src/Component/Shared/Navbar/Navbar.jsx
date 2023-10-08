import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
// import userImg from '../../../assets/user.png';

const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext);
    // const {userlogo,setuseLogo}=useState(userImg)


    // user?.photoURL && setuseLogo(user?.photoURL)

    // console.log(user?.displayName)
    const handleLogOut = () => {
        handleSignOut()
            .then(() => {
                toast.success("SuccessFully You LogOut")
            })
            .catch()
    }

    const NavItem =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/order'}>My Order</NavLink></li>
            <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
            {
                user ?
                    <>
                        <li onClick={handleLogOut}><Link>LogOut</Link></li>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={user?.photoURL} alt="" className='w-10 h-10 rounded-full' />
                            <h1 className=''>{user?.displayName}</h1>
                        </div>
                    </>
                    :
                    <>
                        <li><NavLink to={'/login'}>Login</NavLink></li>
                        {/* <img src={userImg} alt="" className='w-10 h-10 rounded-full'/> */}

                    </>
            }
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow uppercase rounded-box w-52 bg-[#ff466e]">
                            {NavItem}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        {/* <h1 className='text-xl font-bold'>LOGO</h1> */}
                        <div className='flex gap-2 items-center'>
                            <img src="/vite.svg" alt="" />
                            <span className='font-bold text-xl'>LOGO</span>

                        </div>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 lg:flex items-center uppercase">
                        {NavItem}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Navbar;