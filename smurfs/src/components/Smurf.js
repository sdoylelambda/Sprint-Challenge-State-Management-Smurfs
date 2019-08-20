import React from 'react';

const Smurf = (props) => {
    console.log('smurf', props)
    return (
        <div>
            <li>
            <h4>{props.smurf.name}</h4>
            <h4>{props.smurf.height}</h4>
            <h4>{props.smurf.age}</h4>
            </li>
        </div>
    );
};

export default Smurf