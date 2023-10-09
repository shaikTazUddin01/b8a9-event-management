import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../../Component/Banner/Banner';

const Contact = () => {
    return (
        <div>
            <Banner></Banner>

            <div className='flex flex-col md:flex-row md:gap-10 max-w-7xl mx-auto md:my-10 p-10 md:py-20 items-center' >

                <div className='w-full md:w-2/4 ' >
                    <h1 className='text-4xl font-semibold mb-2'>contact Us</h1>
                    <div className='seviceHeader block h-[3px] w-[30%] md:w-[25%] lg:w-[15%] bg-[#FF325E] mb-10'></div>
                    <h3 className='text-xl md:text-2xl mb-3 font-semibold'>Rawhah Event Management company</h3>
                    <p className='text-xl md:text-2xl font-semibold mb-3'>Address : <span className='text-lg md:text-xl font-medium text-[#636363]'> 04,Poschim Bania Khamar Cross Road; BosuPara PS, Khulna – 9100, Bangladesh</span></p>
                    <p className='text-xl md:text-2xl font-semibold mb-3'>Phone : <span className='text-lg md:text-xl  font-medium text-[#636363]'>+880 1834 957677</span></p>
                    <p className='text-xl md:text-2xl font-semibold mb-3'>Email : <span className='text-lg md:text-xl font-medium text-[#636363] '>tazahmedsoft@gmail.com</span></p>
                </div>

                <div className='w-full md:w-2/4 my-10 md:my-0 '>
                    <div className="w-full shadow-2xl hover:shadow-xl shadow-[#FF325E]  hover:shadow-[#FF325E] rounded-lg bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name <span className='text-red-600'>*</span></span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email <span className='text-red-600'>*</span></span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment <span className='text-red-600'>*</span></span>
                                </label>
                                {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                                <textarea type="password" placeholder="comment here..." className="input input-bordered min-h-16" name="message" id="" cols="30" rows="10" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="py-2 px-3 text-white rounded-lg font-semibold bg-[#FF325E]">Send Messages</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;