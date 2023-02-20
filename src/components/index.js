import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import AllRoutines from './Routines';
import AllActivities from './Activities';
import RoutineView from './RoutineView';
import MyProfile from './MyProfile';

const Main = (props) => {
    const { routines, setRoutines, activities, setActivities, user } = props;
    return (
        <>
            <Routes>
                <Route path='/profile' element={<MyProfile user={user} setRoutines={setRoutines} routines={routines} />} />
                <Route path='/routines/:routineId' element={<RoutineView routines={routines} />} />
                <Route path="/routines" element={<AllRoutines routines={routines} />}
                />
                <Route path='/activities' element={<AllActivities activities={activities} setActivities={setActivities} />} />
                <Route path='/' element={
                    <div>
                        <div>Home</div>
                    </div>} />
            </Routes>
        </>
    )
};

export default Main;