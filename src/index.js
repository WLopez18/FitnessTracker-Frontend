import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Routes, Route, HashRouter } from 'react-router-dom';
import AllRoutines from './components/Routines';
import AllActivities from './components/Activities';
import RoutineView from './components/RoutineView';


const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  const fetchAllRoutines = () => {
    fetch('https://fitnesstrac-kr.herokuapp.com/api/routines')
      .then(response => response.json())
      .then(routines => setRoutines(routines));
  }

  const fetchAllActivities = () => {
    fetch('https://fitnesstrac-kr.herokuapp.com/api/activities')
      .then(response => response.json())
      .then(activities => setActivities(activities));
  }

  useEffect(() => {
    fetchAllRoutines();
    fetchAllActivities();
  }, []);

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <nav id='nav-bar'>
        <Link to='/routines'>Routines ({routines.length})</Link>
        <Link to='/activities'>Activities ({activities.length})</Link>
      </nav>
      <Routes>
        <Route path="/routines" element={<AllRoutines routines={routines} />}
        />
        <Route path='/routines/:routineId' element={<RoutineView routines={routines} />} />
        <Route path='/activities' element={<AllActivities activities={activities} />} />
      </Routes>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);

//Testing Git push - Walter
//Testing Git branch push- Walter