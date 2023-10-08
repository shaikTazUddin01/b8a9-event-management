import { useContext } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const EventCard = ({ event }) => {
    const { id, title, img, thumb_img, price, details } = event;

    // const {loader}=useContext(AuthContext)

    // if (loader) {
    //     return (
    //        <div className='min-h-[90vh] flex justify-center'>
    //        <span className="loading loading-spinner loading-lg"></span>
    //    </div>
    //     )
    // }

    return (
        <div className='mt-10'>
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-[#FF325E] hover:shadow-[#FF325E] hover:shadow-xl">
                <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        src={img}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className="p-6">
                    <div className='flex justify-between'>
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h5>
                        <p className='font-semibold'>{price}</p>
                    </div>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {details.slice(0, 150)}
                        <span className='font-semibold'>...</span>
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/eventDetails/${id}`}>
                        <button className="bg-[#FF325E] text-white font-semibold rounded-xl px-3 py-2 flex items-center gap-2">
                            View Details
                            <span>
                                <AiOutlineArrowRight></AiOutlineArrowRight>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;