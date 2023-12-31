import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext);
    // const {userlogo,setuseLogo}=useState(userImg)

    const [open,setopen]=useState(false)
    const handleLogOut = () => {
        handleSignOut()
            .then(() => {
                toast.warning("SuccessFully You LogOut")
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
                        <div className='flex flex-col lg:justify-center lg:items-center px-5 lg:px-0'>
                        <abbr title="Click here to see profile">
                            <img src={user?.photoURL ? user.photoURL : ""} alt="img" className='w-10 h-10 border rounded-full' 
                             onClick={()=>setopen(!open)}/>
                        </abbr>

                        {
                            open=== true ?
                            <div className='text-white border border-[#FFFFF] bg-[#2b2b2b] p-4 mt-10 lg:mt-32
                             rounded-md z-20 ml-8 lg:ml-0 lg:mr-40  absolute
                            text-center shadow-lg shadow-[#FF325E]'>
                                <h1 className='' >{user?.displayName && user.displayName}</h1>
                                <h1 className='lowercase' >{user?.email && user.email}</h1>
                            </div>
                            :
                            <div className='hidden absolute font-medium'>
                            <h1 className='' >{user?.displayName && user.displayName}</h1>
                            <h1 className='' >{user?.email && user.email}</h1>
                        </div>
                        }
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
                    <div className="dropdown z-10 text-white flex justify-between ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow uppercase rounded-box w-52 bg-[#ff466e]">
                            {NavItem}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        {/* <h1 className='text-xl font-bold'>LOGO</h1> */}
                        <div className='lg:flex gap-2 items-center hidden'>
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
                <div className="lg:hidden navbar-end">
                    <Link to={'/'}>
                    <div className='flex gap-2 items-center mr-5'>
                        <img src="/vite.svg" alt="" />
                        <span className='font-bold text-xl'>LOGO</span>

                    </div>
                    </Link>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Navbar;