import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderReview = () => {
    const tshirts = useLoaderData()
    return (
        <div>
            <h2>This is Order Review Page:{tshirts.length}</h2>
        </div>
    );
};

export default OrderReview;