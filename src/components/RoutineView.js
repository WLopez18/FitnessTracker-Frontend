import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RoutineView = (props) => {
    const { routines } = props;
    const id = useParams().routineId;
    const x = routines.find(y => (y.id === id))
    console.log(x)// Note to Norman: We're trying to display the routine that matches the params routineId
    // if (x) {
    //     return (
    //         <h1>There is NO Routine!</h1>
    //     );
    // }
    // return (
    //     <h1>There is a Routine!</h1>
    // )
}

export default RoutineView;