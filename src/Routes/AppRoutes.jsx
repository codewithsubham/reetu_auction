import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "../Pages/MainScreen";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import RegisterUser from "../Pages/RegisterUser";
import Login from "../Pages/Login";
import Bidding from "../Pages/BIdding";


const AppRoutes = () =>
{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainScreen />}>
                        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
                        <Route path="/products" element={<Products />} />
                        <Route path="/makebid/:id" element={<Bidding />} />
                        <Route path="/register" element={<RegisterUser />} />
                        <Route path="/login" element={<Login />} />
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