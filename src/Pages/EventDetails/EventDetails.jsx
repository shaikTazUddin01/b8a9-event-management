import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EventDetails = () => {
    const { id } = useParams()
    const eventItem = useLoaderData();
    const idInt = parseInt(id)
    const [eventDetails, setEventDetails] = useState([]);

    // const{img,title}=eventDetails

    useEffect(() => {
        const eventFind = eventItem.find(event => event.id === idInt)
        setEventDetails(eventFind)
    }, [])

    const handleOrder = () => {
        const getEventItem = localStorage.getItem('event');
        if (!getEventItem) {
            localStorage.setItem('event', JSON.stringify([eventDetails]))
        } else {
            const newGetEventItem = JSON.parse(getEventItem);
            const isExist = newGetEventItem.find(item => item.id === idInt)
            if (!isExist) {
                localStorage.setItem("event", JSON.stringify([...newGetEventItem, eventDetails]))
                toast.success("SuccessFully You Add a New Order")
            } else {
                toast.error("Already Ordered This Service")
            }
        }

        // const previousEvent
    }
    return (
        <div className='max-w-6xl my-20 mx-auto'>
            <h1 className='text-3xl md:text-6xl font-semibold text-center my-5 md:my-10 '>
                The largest event management <br /> company in Bangladesh</h1>
            <div className='seviceHeader mx-auto block h-[3px] w-[30%] md:w-[30%] bg-[#FF325E] mb-20'></div>
            <div className='md:px-20'>
                <img src={eventDetails?.img} alt="" className='w-full h-auto mx-auto' />
                <div className='px-5 md:px-0'>
                    <h1 className='text-4xl font-semibold mt-4'>{eventDetails?.title}</h1>
                    <p className='text-3xl font-semibold text-[#727272] mt-2'>{eventDetails?.price}</p>
                </div>
                <p className='mt-5 px-5 md:px-0'>{eventDetails?.details}</p>
                <div className='flex flex-col md:flex-row items-center md:justify-between '>
                    <Link to={'/'}>
                        <button className='px-3 py-2 bg-[#FF325E] text-white rounded-md mt-5 text-[18px] font-bold flex items-center gap-2'>
                            <AiOutlineArrowLeft></AiOutlineArrowLeft>
                            Go Back Home</button>
                    </Link>


                    <button className='px-3 py-2 bg-[#FF325E]
                         text-white rounded-md mt-5 text-[18px] 
                         font-bold flex items-center gap-2'
                        onClick={handleOrder}
                    >
                        Order Now
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default EventDetails;