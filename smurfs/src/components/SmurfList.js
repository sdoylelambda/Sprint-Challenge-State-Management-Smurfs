import React from 'react';
import Smurf from '../components/Smurf'

const  SmurfList = (props) => {
    console.log('smurflist', props)
    return (
        <div>
         <h1>smurftlist</h1>
         <ul>
         {props.smurfs && props.smurfs.map((smurf, id) => {
         // {props.smurfs.map((smurf, id) => {
             return (
             <Smurf smurf={smurf} key={id} />
             )
         })}
         </ul>
         </div>
    )
}

export default SmurfList