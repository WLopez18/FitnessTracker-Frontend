import React from 'react';
import { Link } from 'react-router-dom';

const AllActivities = (props) => {
  const { activities } = props;

  return (
    <div>
      <h2>All Activities ({activities.length})</h2>
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
  )
}

export default AllActivities