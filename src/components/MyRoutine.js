import React, { useEffect, useState } from 'react';
import { attachActivityToRoutine } from '../api';

const MyRoutines = ({ user, activities }) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activity, setActivity] = useState(null);

  const handleSubmit = ({ routineId }) => {
    const activity = attachActivityToRoutine({
      routineId,
      count,
      duration,
      activity,
    });
  };

  const getMyRoutines = async () => {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/users/${user.username}/routines`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    setMyRoutines(result);
  };

  useEffect(() => {
    getMyRoutines();
  }, []);

  return (
    <div>
      {myRoutines.map((routine) => {
        return (
          <div key={routine.id}>
            <p>Name: {routine.name}</p>
            <p>id: {routine.id}</p>
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                handleSubmit({ routineId: routine.id });
              }}
            >
              <input name="count" value={count} onChange = {ev => setCount(ev.target.value)}/>
              <input name="duration" value={duration} onChange = {ev => setDuration(ev.target.value)}/>
              <select>
                {routine.activities.map((activity) => (
                 <option key={routine.id} value={activity.id}>{activity.name}</option>
                ))}
              </select>
              <button type="submit">Add Activity</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default MyRoutines;