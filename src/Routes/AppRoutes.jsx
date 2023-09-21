import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "../Pages/MainScreen";


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<CheckAuth />}> */}
                        <Route path="/" element={<MainScreen/>} /> {/* 👈 Renders at /app/ */}
                    {/* </Route> */}
                    {/* <Route path="/login" element={<LoginPage />} /> {/* 👈 Renders at /app/ */}
                    {/* <Route path={'/logout'} element={<Logout />} /> */} 
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes