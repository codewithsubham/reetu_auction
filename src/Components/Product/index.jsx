import React from 'react'

const Product = () =>
{
    return (
        <div className='flex flex-col gap-1 w-full justify-center items-center'>
            <div className='w-36 h-20 bg-blue-500 border-2'></div>
            <p>lorem ipsum</p>
            <p>Price $50</p>
            <button className='border-2 bg-orange-400 w-full'>bid</button>

        </div>
    )
}

export default Product