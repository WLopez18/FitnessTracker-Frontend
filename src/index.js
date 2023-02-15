import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('https://fitnesstrac-kr.herokuapp.com/api/routines')
      .then(response => response.json())
      .then(routines => setRoutines(routines));
  }, []);
  useEffect(() => {
    fetch('https://fitnesstrac-kr.herokuapp.com/api/activities')
      .then(response => response.json())
      .then(activities => setActivities(activities));
  }, []);
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <div>
        <h2>Routines ({routines.length})</h2>
        <ul>
          {
            routines.map(routine => {
              return (
                <li key={routine.id}>
                  {routine.name} ({routine.activities.length})
                </li>
              );
            })
          }
        </ul>
      </div>
      <div>
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
      </div>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);


//Testing Git push - Walter
//Testing Git branch push- Walter