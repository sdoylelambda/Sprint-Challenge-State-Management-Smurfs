import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";

export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE }))
}

export const addNewSmurf = (smurf) => dispatch => {
    dispatch({ type: ADD_SMURFS_START})
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => dispatch ({ type: ADD_SMURFS_SUCCESS, payload: res.data}))
        .catch(err => dispatch ({ type: ADD_SMURFS_FAILURE, payload: err.data}))
}