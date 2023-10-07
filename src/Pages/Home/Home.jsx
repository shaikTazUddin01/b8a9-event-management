import React from 'react';
import Banner from '../../Component/Banner/Banner';
import './home.css'
import { useLoaderData } from 'react-router-dom';
import EventCard from '../../Component/Home/eventCard';
import CustomerSection from '../../Component/Home/CustomerSection';
import Whyus from '../../Component/Home/Whyus';
import CarouselBanner from '../../Component/Banner/CarouselBanner';
const Home = () => {
    const events = useLoaderData()

    return (
        <div>
            {/* <CarouselBanner></CarouselBanner>
            <div className='max-w-7xl mx-auto'>
                <div className=' my-20'>
                    <h1 className='text-4xl font-bold pb-2 text-center mb-2' >Our services</h1>
                    <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[10%] bg-[#FF325E]'></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 p-5'>
                        {
                            events.map(event => <EventCard event={event}></EventCard>)
                        }
                    </div>
                </div>
                <div>
                    <div className='text-center my-10'>
                        <h1 className='text-4xl font-bold pb-2' >Our Customer</h1>
                        <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[10%] bg-[#FF325E]'></div>

                        <CustomerSection></CustomerSection>
                    </div>
                </div>

                <div className='my-20'>
                    <h1 className='text-4xl font-bold pb-2 text-center' >Why Choose Us</h1>
                    <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[10%] bg-[#FF325E]'></div>
                    <Whyus></Whyus> */}
                </div>
            </div>
        </div>
    );
};

export default Home;