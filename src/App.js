import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { getAllActivities, getAllRoutines, getUser } from './api';
import Header from './components/users/Header';
import Main from './components/index';


const App = () => {
    const [routines, setRoutines] = useState([]);
    const [user, setUser] = useState({});
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const fetchedRoutines = await getAllRoutines();
            setRoutines(fetchedRoutines);
            const fetchedActivities = await getAllActivities();
            setActivities(fetchedActivities);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const exchangeTokenForUser = async () => {
            let token = window.localStorage.getItem('token');
            if (token) {
                let user = await getUser(token);
                setUser(user);
            }
        };

        exchangeTokenForUser();
    }, []);

    return (
        <div>
            <Header routines={routines} setUser={setUser} user={user} activities={activities} />
            <Main routines={routines} activities={activities} setActivities={setActivities} user={user}/>

        </div>
    );
};

export default App;