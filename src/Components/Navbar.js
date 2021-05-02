import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "../sk.png"
const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="nav">
            <div className="profile">
                <img src={s} alt="" />
            </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                <p>@2021 created by Sajid</p>
            </footer>
            </nav>
            
        </div>
    );
};

export default Navbar;