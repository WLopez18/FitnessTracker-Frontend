import React from "react";
import LoginButton from "./Login";

const Header = ({ setToken, setUser, user }) => {
    return (
        <div>
            <h1>Header h1 Text</h1>
            <h3>H3 Text Here</h3>
            {user.username && <p>Welcome {user.username}!</p>}
            <LoginButton setToken={setToken} setUser={setUser} />
        </div>
    );
};

export default Header;