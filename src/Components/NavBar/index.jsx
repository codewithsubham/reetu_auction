import { NavLink } from "react-router-dom";
import Profile from "../Profile";

const NavBar = () =>
{

    return <>


        <div className="grid grid-cols-7 w-90 h-[10vh] items-center px-8 border-sm shadow-sm">
            <div className="logo col-span-1">
                Aucion
            </div>
            <div className="grid col-span-3 grid-cols-5 items-center h-100 justify-center text-center gap-0">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Products
                </NavLink>
                <NavLink
                    to="/addbids"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Add Bids
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    About us
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Contact
                </NavLink>

            </div>
            <div className="logo col-span-3 justify-center text-end px-8">
                <Profile />

            </div>

        </div>
    </>

}

export default NavBar;