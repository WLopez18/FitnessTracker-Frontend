import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import AllRoutines from './Routines';
import AllActivities from './Activities';
import RoutineView from './RoutineView';

const Main = (props) => {
    const { routines, activities, setActivities } = props;
    return (
        <>
            <h1>Main Component</h1>
            <Routes>
                <Route path='/routines/:routineId' element={<RoutineView routines={routines} />} />
                <Route path="/routines" element={<AllRoutines routines={routines} />}
                />
                <Route path='/activities' element={<AllActivities activities={activities} setActivities={setActivities} />} />
                <Route path='/' element={
                    <div>
                        <div>Home</div>
                        {/* {
                            user.id ? <div>Welcome {user.username} <button onClick={logout}>Logout</button></div> : null
                        }
                        {
                            !user.id ? (
                                <div>
                                    <Register />
                                    <Login exchangeTokenForUser={exchangeTokenForUser} />
                                </div>) : <div>Hello</div>
                        } */}
                    </div>} />
            </Routes>
        </>
    )
};

export default Main;