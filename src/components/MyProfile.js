import React, { useState, useEffect } from 'react';
import { createRoutine } from '../api/index';
import MyRoutines from './MyRoutine';

const MyProfile = ({ user, setRoutines, routines, activities }) => {
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [routineIsPublic, setRoutineIsPublic] = useState(false);
    const clickHandler = async () => {
        const token = window.localStorage.getItem('token');
        if (token) {
            const response = await createRoutine(token, routines);
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
                    <form>
                        <input
                            placeholder='Routine Name'
                            value={routineName}
                            onChange={ev => setRoutineName(ev.target.value)} />
                        <input
                            placeholder='Routine Goal'
                            value={routineGoal}
                            onChange={ev => setRoutineGoal(ev.target.value)} />
                        <input
                            placeholder='Public Routine?'
                            value={routineIsPublic}
                            onChange={ev => setRoutineIsPublic(ev.target.value)} />
                        <button onClick={clickHandler}>Create new routine</button>
                    </form>
                </div>
            ) : (
                <h1>You must log in!</h1>
            )}
        </>
    );
};

export default MyProfile;