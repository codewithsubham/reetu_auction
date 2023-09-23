import React, { useEffect, useState } from 'react'
import Product from '../../Components/Product'
import apiRequest from '../../Api';
import useStore from '../../Store/store';

let getAllBids = async (callback) =>
{
    try
    {
        let response = await apiRequest("/api/v1/auction/listings", "GET");
        callback(response)
    } catch (error)
    {
        callback([]);
    }

}




const Products = () =>
{
    let [isUserLoggedIn,] = useState(window.localStorage.getItem("accessToken"));


    const { bids, setBids } = useStore();
    //const setBids = useStore((state) => state.setBids);

    useEffect(() =>
    {
        if (bids.length != 0) return
        getAllBids((data) =>
        {
            setBids(data);
            console.log(data)
        })
    }, [])


    return (
        <>
            <div className="mx-auto px-24 py-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Uncover Exciting Bidding Opportunities - Your Gateway to Great Deals!</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {
                        bids.map((bid) => <Product loggedin={isUserLoggedIn} {...bid} key={bid.id} />)
                    }

                </div>
            </div>
        </>
    )
}

export default Products