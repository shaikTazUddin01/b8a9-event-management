import CountUp from 'react-countup';
import bannerImg from '../../assets/mainBanner.jpg'


const CustomerSection = () => {
    return (
        <div className='bg-cover mt-10' style={{backgroundImage:`url(${bannerImg})`}}>
            <div className='bg-[#242424b7] min-h-[300px] grid items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-between my-10'>
                    <div className=''>
                        <h1 className='text-white font-bold text-3xl'><CountUp end={280} delay={4.0}/></h1>
                        <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[20%] bg-[#FF325E]'></div>
                        <h2 className='text-white font-bold text-3xl'>ORGANIZED</h2>
                    </div>
                    <div className=''>
                    <h1 className='text-white font-bold text-3xl'><CountUp end={164} delay={4.0}/></h1>
                        <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[20%] bg-[#FF325E]'></div>
                        <h2 className='text-white font-bold text-3xl'>RUNNING</h2>
                    </div>
                    <div className=''>
                    <h1 className='text-white font-bold text-3xl'><CountUp end={280} delay={4.0}/></h1>
                        <div className='seviceHeader mx-auto block h-[3px] w-[20%] md:w-[20%] bg-[#FF325E]'></div>
                        <h2 className='text-white font-bold text-3xl'>PANDING</h2>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default CustomerSection;