import React from 'react';
import { Link } from 'react-router-dom';

const AllRoutines = (props) => {

    const { routines } = props;

    return (
        <div>
            <h2>Routines ({routines.length})</h2>
            <ul>
                {
                    routines.map(routine => {
                        // console.log(routine.activities)
                        return (
                            <li key={routine.id}>
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
                                    {/* {post.isAuthor ? <button onClick={() => deletePost({ setPosts, posts, post, token })}>Delete</button> : null} */}
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