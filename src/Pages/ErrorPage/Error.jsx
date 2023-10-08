import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center grid justify-center items-center my-20'>
            {/* <h1 className='text-center mt-2 text-4xl font-bold'>Oops..!</h1> */}
            <h1 className='text-center mt-2 text-6xl font-bold'>404</h1>
            <h1 className='text-center mt-2 text-5xl font-bold'>Page not Found</h1>
            <Link>
            <button className='py-2 px-3 text-white bg-[#FF325E] rounded-lg mt-2'>Go Home</button>
            </Link>
        </div>
    );
};

export default Error;