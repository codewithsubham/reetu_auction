import React, { useRef, useState } from 'react'


function validateUserData(name, password, email)
{
    const nameValid = name.length >= 6;
    const passwordValid = password.length >= 8;
    const emailValid = /^[\w-]+(\.[\w-]+)*@stud\.noroff\.no$/.test(email);

    if (!nameValid) return { error: true, message: "Name is invalid should be 6 character long" };

    if (!passwordValid) return { error: true, message: "Password is invalid should be 8 character long" };

    if (!emailValid) return { error: true, message: "Email is invalid should be of stud.noroff.no" };

    return {
        error: false,
        message: ""
    }
}


const RegisterUser = () =>
{
    let [formError, setFormError] = useState({ error: false, message: "" });
    let name = useRef("");
    let email = useRef("");
    let password = useRef("");




    let handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(name.current.value, password.current.value, email.current.value)
        let validationResponse = validateUserData(name.current.value, password.current.value, email.current.value);
        setFormError(validationResponse);
    }

    return <>
        <div className="isolate bg-white px-6 py-12">

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Registration for Auction App</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Please fill out the form ,  to register with us</p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className='text-center'>
                    <span className='text-red-500'>{formError.error && formError.message}</span>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                        <div className="mt-2.5">
                            <input ref={name} type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input ref={email} type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
                        <div className="mt-2.5">
                            <input ref={password} type="password" name="password" id="password" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                    </div>


                </div>
                <div className="mt-10">
                    <button type="submit" onClick={handleSubmit} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                </div>
            </form >
        </div >
    </>

}

export default RegisterUser