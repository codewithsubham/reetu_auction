import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiRequest from '../../Api'

let getBidInfo = async (id, callback) =>
{
    try
    {
        let response = await apiRequest(`/api/v1/auction/listings/${id}?_bids=true`, 'GET');
        callback({
            error: false,
            response
        });
    } catch (error)
    {
        callback({
            error: true,
            message: error.message
        })

    }
}

const Bidding = () =>
{
    let [bidInfo, setBidInfo] = useState(false);
    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() =>
    {
        getBidInfo(id, (response) =>
        {
            if (response.error)
            {
                window.alert(response.message);
                navigate("/products", { replace: true });
                return
            }
            setBidInfo(response)
        })

    }, [])

    return (
        bidInfo ?
            <div className="mx-auto px-24 py-8">
                <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-10">
                    <div className="mt-6">
                        <div className="group relative">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 h-[30rem]">
                                <img src={bidInfo.response.media[0] ? bidInfo.response.media[0] : "public/no-preview.png"} alt="Front of men&#039;s Basic Tee in black." className={`h-full w-full lg:h-full lg:w-full object-contain`} />

                            </div>

                        </div>
                    </div>
                    <div className="mt-4 flex justify-between">

                        <div>
                            <div className="px-4 sm:px-0">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Bid Information</h3>
                            </div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Title</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {bidInfo.response.title}</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{bidInfo.response.description}</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Created On</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(bidInfo.response.created).toLocaleDateString()}</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Total bids</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{bidInfo.response._count.bids}</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Heighest bid</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{bidInfo.response.bids[bidInfo.response.bids.length - 1].amount} credit</dd>
                                    </div>

                                    <div className="px-4 py-6 sm:grid sm:grid-rows-3 sm:gap-4 sm:px-0">
                                        <div>
                                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                                Credits
                                            </label>
                                            <div className="relative mt-2 rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="price"
                                                    id="price"
                                                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="0.00"
                                                />

                                            </div>
                                            <button type="submit" className=" flex w-full mt-2 items-center justify-center rounded-md border shadow-sm bg-slate-500 px-3 py-2 text-sm text-white">Make Bid</button>

                                        </div>
                                    </div>

                                </dl>
                            </div>
                        </div>




                    </div>
                </div>
            </div> : <h1> Fetching..... </h1>
    )
}

export default Bidding