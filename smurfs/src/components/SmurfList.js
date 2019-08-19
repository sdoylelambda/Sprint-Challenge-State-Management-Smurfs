import React from 'react';
import Smurf from '../components/Smurf'

const  SmurfList = (props) => {
    return (
        <div>
         <h1>smurftlist</h1>
         <ul>
         {props.smurfs && props.Smurfs.map((smurf, id) => {
             return (
             <Smurf smurf={smurf} id={id} />
             )
         })}
         </ul>
         </div>
    )
}

export default SmurfList