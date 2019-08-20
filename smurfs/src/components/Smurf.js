import React from 'react';
import { deleteSmurf } from '../actions/index'
import { connect } from 'react-redux';

function Smurf(props) {
    const deleteSmurfs = id => {
        props.deleteSmurf(id);
    };


    // removeSmurf = id => {
    //     id.preventDefault();
    //     console.log('deleteSmurf', id)
    //     console.log('deleteSmurf2', this.props)
    //     this.props.deleteSmurf(id);
    // }

  
    return (
        <div>
            <li>
            <h4>{props.smurf.name}</h4>
            <h4>{props.smurf.height}</h4>
            <h4>{props.smurf.age}</h4>
            <button onClick={() => deleteSmurfs(props.smurf.id)}>Delete Smurf</button>
            </li>
        </div>
    );
};



const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfs
    }
}


export default connect(
    mapStateToProps,
    { deleteSmurf }
)(Smurf)