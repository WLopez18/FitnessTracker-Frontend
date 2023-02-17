import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Routes, Route, HashRouter } from 'react-router-dom';
import AllRoutines from './components/Routines';
import AllActivities from './components/Activities';
import RoutineView from './components/RoutineView';
import Register from './components/users/Register';
import Login from './components/users/Login';


const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState('');
  const [token, setToken] = useState(null)

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
  const exchangeTokenForUser = () => {
    const token = window.localStorage.getItem('token');
    setToken(token);
    if(token) {
      fetch ('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ token }`
        },
    })
    .then (response => response.json())
    .then (result => {
      const user = result.data;
      setUser(user);
    })
    .catch(error => console.log(error));
    }
  }

  const logout = () => {
    window.localStorage.removeItem('token');
    setToken(null)
    setUser({});
  }

  useEffect(() => {
    fetchAllRoutines();
    fetchAllActivities();

    exchangeTokenForUser();
  }, []);

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <nav id='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to='/routines'>Routines ({routines.length})</Link>
        <Link to='/activities'>Activities ({activities.length})</Link>
      </nav>
      
      <Routes>
        <Route path='/routines/:routineId' element={<RoutineView routines={routines} />} />
        <Route path="/routines" element={<AllRoutines routines={routines} />}
        />
        <Route path='/activities' element={<AllActivities activities={activities} />} />
        <Route path='/' element={
          <div>
            <div>Home</div>
            {
              user.id ? <div>Welcome { user.username } <button onClick={ logout }>Logout</button></div> : null
            }
            {
              !user.id ? (
                <div>
                  <Register />
                  <Login exchangeTokenForUser= { exchangeTokenForUser } />
                </div>) : <div>Hello</div>
            }
          </div>} />
      </Routes>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);

//Testing Git push - Walter
//Testing Git branch push- Walter