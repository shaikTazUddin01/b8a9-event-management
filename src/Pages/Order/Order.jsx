import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';

const Order = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const getOrder = localStorage.getItem('event')
        setOrders(JSON.parse(getOrder))

    }, [])

    // console.log(orders)

    return (
        <div>
            {
                orders ?
                  <div className='min-h-[90vh] max-w-7xl 
                  mx-auto my-20 grid grid-cols-1 gap-8 
                  lg:grid-cols-2 px-5 md:px-0'>
                    
                    {orders?.map(order => <OrderCard key={order.id} order={order}></OrderCard>)}
                    </div>
                    :
                    <div className='text-3xl font-semibold flex justify-center items-center w-full min-h-[90vh]'>
                        <h1>No Order Added</h1>
                    </div>
            }
        </div>
    );
};

export default Order;