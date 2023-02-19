import React from 'react';
import { createRoutine } from '../api/index';

const MyProfile = ({ user }) => {
    const clickHandler = async () => {
        const token = window.localStorage.getItem('token')
        if (token) {
            const response = await createRoutine(token);
            alert(response);

        }

    };
    return (
        <>
        {user.username ? (
        <div>
            <h3>{user.username}'s Profile</h3>
            <h2>My Routines:</h2>
            <button onClick={clickHandler}>
                Create new routine
                </button>
        </div>
    ) : (
        <h1>You must log in!</h1>
    )}
    </>
    );
};

export default MyProfile;