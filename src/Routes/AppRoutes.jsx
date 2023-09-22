import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "../Pages/MainScreen";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import RegisterUser from "../Pages/RegisterUser";


const AppRoutes = () =>
{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainScreen />}>
                        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
                        <Route path="/products" element={<Products />} /> {/* 👈 Renders at /app/ */}
                        <Route path="/register" element={<RegisterUser />} />
                    </Route>
                    {/* <Route element={<CheckAuth />}> */}

                    {/* </Route> */}
                    {/* <Route path="/login" element={<LoginPage />} /> {/* 👈 Renders at /app/ */}
                    {/* <Route path={'/logout'} element={<Logout />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes