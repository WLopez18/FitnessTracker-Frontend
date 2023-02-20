import { response } from 'express';
import React from 'react';
import { createRoutine } from '../api/index';
import MyRoutines from './MyRoutine';

const MyProfile = ({ user, setRoutines, routines, activities }) => {
  const clickHandler = async () => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const response = await createRoutine(token);
      if (!response.error) {
        response.activities = [];
        setRoutines([response, ...routines]);
      }
    }
  };

  return (
    <>
      {user.username ? (
        <div>
          <h3>{user.username}'s Profile</h3>
          <h2>My Routines:</h2>
          <MyRoutines user={user} activities={activities} />
          <button onClick={clickHandler}>Create new routine</button>
        </div>
      ) : (
        <h1>You must log in!</h1>
      )}
    </>
  );
};

export default MyProfile;