import React from "react";
import LoginButton from "./Login";
import { Link } from 'react-router-dom';
import LogoutButton from "./Logout";
import RegisterButton from "./Register";

const Header = ({ routines, setUser, user, activities }) => {
    return (
        <div>
            <h1>Header h1 Text</h1>
            <h3>H3 Text Here</h3>
            <nav id='nav-bar'>
                <Link to='/'>Home</Link>
                {user.username &&(
                     <Link to='/profile'>My Profile </Link>
                )}
                <Link to='/routines'>Routines ({routines.length})</Link>
                <Link to='/activities'>Activities ({activities.length})</Link>
            </nav>
            {user.username && <p>Welcome {user.username}!</p>}
            {user.username ? <LogoutButton setUser={setUser} /> : (
                <div>
                    <RegisterButton setUser={setUser}/>
                    <LoginButton setUser={setUser} />
                </div> )}
        </div>
    );
};

export default Header;