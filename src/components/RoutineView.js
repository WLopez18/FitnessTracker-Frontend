import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RoutineView = (props) => {

    const {routines} = props
    const id = useParams().routineId;
    const routine = routines.find(routine => routine.id === parseInt(id))

    return (
        <div>
            {routine ? <div>
                <h1><Link to={'/routines'}>{ routine.name }</Link></h1>
                    <p><span>Goals: </span>{routine.goals}</p>
                    <p><span>Activities: </span></p>       
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
                    <p><span>Creator By: </span>{routine.creatorName}</p>
            </div> : <div>null</div>}
        </div>
    )
}

export default RoutineView;