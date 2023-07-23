import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { RouteItem, NavbarProps } from "../types";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import '../assets/Navbar.css'
import { userLogout } from "../slices/userSlice";

export const NavBar: React.FC<NavbarProps> = ({ routes }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector((state) => state.user.loggedIn);
    const userName = useAppSelector((state) => state.user.userName);

    function handleLogout() {
        dispatch(userLogout());
        navigate('/login');
    }

    return (
        <nav>
            <ul className="navbar-list">
                {isLoggedIn && (
                    <li className="navbar-item">
                        <button className="navbar-link" onClick={() => handleLogout()}>Logout</button>
                    </li>
                )}
                {isLoggedIn && routes.map((route) => (
                    <li className="navbar-item" key={route.path}>
                        <Link to={`/${userName}${route.path}`} className="navbar-link">
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};