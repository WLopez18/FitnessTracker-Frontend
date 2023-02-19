import React from 'react';

const MyProfile = ({ user }) => {
    return (
        <div>
            <h3>{user.username}'s Profile</h3>
            <h2>My Routines:</h2>
            <button>Create new routine</button>
        </div>
    );
};

export default MyProfile;