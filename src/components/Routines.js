import React from 'react';
import { Link } from 'react-router-dom';

const AllRoutines = (props) => {

    const { routines } = props;

    return (
        <div>
            <h2>All Routines ({routines.length})</h2>
            <ul>
                {
                    routines.map(routine => {
                        return (
                            <li style={{ border: '2px solid black', padding: '1rem', margin: '5px' }} key={routine.id}>
                                <Link to={`/routines/${routine.id}`} >{routine.name}({routine.activities.length})</Link>
                                <ul>
                                    <li>
                                        Goal: {routine.goal}
                                    </li>
                                    <li>
                                        Activities:
                                        <ul>
                                            {
                                                routine.activities.map(activity => {
                                                    return (
                                                        <li key={activity.id}>
                                                            <Link to={`/activities/${activity.id}`} >{activity.name}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li id='routine-creatorName'>
                                        Posted by {routine.creatorName}
                                    </li>
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default AllRoutines