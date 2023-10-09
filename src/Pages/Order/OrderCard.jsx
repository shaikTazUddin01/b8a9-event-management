import React from 'react';
import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const OrderCard = ({ order }) => {
    const { id, img, title, details, price } = order


    return (
        // data-aos="fade-up"
        <div >
            <div className="relative flex flex-col 
            lg:flex-row w-full max-w-[48rem]  rounded-xl
                     bg-white bg-clip-border
                      text-gray-700 shadow-lg shadow-[#FF325E]
                       hover:shadow-xl mx-auto
                     hover:shadow-[#FF325E] mt-5 md:mt-0 p-5 md:mb-10 lg:mb-5">
                <div className="relative m-0 lg:w-2/5 shrink-0 overflow-hidden rounded-t-xl md:rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="mt-5 md:mt-0 md:pl-5">
                    <h4 className=" block font-sans text-2xl md:text-3xl md:mt-3 lg:mt-0 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <h2 className='text-lg font-semibold text-[#636262]'>{price}</h2>
                    <p className="mt-2 mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {details.slice(0, 200)}
                        <Link to={`/eventDetails/${id}`}> <button className='text-[#FF325E]'>see more...</button></Link>
                    </p>
                </div>
            </div>


        </div>




    );



};

export default OrderCard;