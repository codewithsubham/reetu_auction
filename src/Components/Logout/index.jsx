import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () =>
{
    let navigate = useNavigate()
    function handleLogout()
    {
        window.localStorage.clear();
        navigate("/login", { replace: true });

    }
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout