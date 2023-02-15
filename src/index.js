import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Routes, Route, HashRouter } from 'react-router-dom';
import AllRoutines from './components/Routines'

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('https://fitnesstrac-kr.herokuapp.com/api/routines')
      .then(response => response.json())
      .then(routines => setRoutines(routines));
  }, []);
  // useEffect(() => {
  //   fetch('https://fitnesstrac-kr.herokuapp.com/api/activities')
  //     .then(response => response.json())
  //     .then(activities => setActivities(activities));
  // }, []);
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <nav id='nav-bar'>
        <Link to='/routines'>Routines ({routines.length})</Link>
      </nav>
      <Routes>
        <Route path ="/routines" element= {<AllRoutines routines={routines}/>}
          />
      </Routes>

      {/* <div>
        <h2>Activities ({activities.length})</h2>
        <ul>
          {
            activities.map(activity => {
              return (
                <li key={activity.id}>
                  {activity.name}
                </li>
              );
            })
          }
        </ul>
      </div> */}
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);

//Testing Git push - Walter
//Testing Git branch push- Walter