import React, { useState } from "react";

const LogoutButton = ({ setUser }) => {

    const handleClick = async () => {
        setUser({});
        window.localStorage.removeItem('token');
    }
    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default LogoutButton;