import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
    const { id,img, title, details, price } = order


    return (

        <div >
        {/*  */}
                
                    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:shadow-xl hover:shadow-[#FF325E]">
                        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                            <img
                                src={img}
                                alt="image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className=" block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {title}
                            </h4>
                            <h2 className='text-lg font-semibold text-[#636262]'>{price}</h2>
                            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                {details.slice(0, 200)}...
                        <Link to={`/eventDetails/${id}`}> <button className='text-[#FF325E]'>see more</button></Link>
                            </p>
                        </div>
                    </div>
         

        </div>




    );



};

export default OrderCard;