import whyUs from '../../assets/whyUs.jpg'

const Whyus = () => {
    return (
        <div className='px-5 md:px-10  grid grid-cols-1 lg:px-0 lg:grid-cols-2 gap-5 items-center mt-10 mb-20'>
            <div className=''>
                <img src={whyUs} alt="img" className='rounded-xl   shadow-xl shadow-[#FF325E]'/>
            </div>
            <div>
                <p className='space-y-5 mt-5 md:mt-0'>
                    <span className='font-bold text-lg '>Certainly, here are some details for a "Why Choose Us" section that you can use for your event management company:</span>
                    <ul className='space-y-5'>
                        <li>
                            <span className='font-bold'>Experience and Expertise:</span> With years of experience in the event management industry, we have honed our skills and expertise to ensure that every event we handle is executed flawlessly. Our team's combined knowledge covers a wide range of events, from weddings and corporate conferences to intimate gatherings and large-scale festivals.
                        </li>
                        <li>
                            <span className='font-bold'>Personalized Service:</span> We understand that every client and event is unique. That's why we take the time to get to know you and your vision. Our personalized approach means that your event is tailored to your specific needs, preferences, and budget, ensuring a one-of-a-kind experience.
                        </li>
                        <li>
                            <span className='font-bold'>Creative Vision:</span> We are passionate about creativity and innovation. Our team of creative minds is always coming up with fresh ideas, unique themes, and imaginative concepts that will make your event stand out and leave a lasting impression.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Whyus;