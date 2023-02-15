import React from 'react';
import { Link } from 'react-router-dom';

const AllRoutines = (props) => {

    const {routines} = props;
    
    return (
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
    )
  }

  export default AllRoutines