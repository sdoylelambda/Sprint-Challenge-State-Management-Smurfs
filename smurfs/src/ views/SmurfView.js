import React from 'react';
import { connect } from 'react-redux';
import SmurfList from "../components/SmurfList";
import { getSmurfs, addNewSmurf, deleteSmurf } from '../actions';

class SmurfView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item: {
                    name: '',
                    age: '',
                    height: '',
                    isLoading: false,
                    error: null,
                    id: ''
            }
        }
    }

    componentDidMount() {
        console.log('CDM');
        this.props.getSmurfs()
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.activeItem &&
            prevProps.activeItem !== this.props.activeItem
        ) {
            this.setState({
                item: this.props.activeItem
            });
        }
    }

    changeHandler = (e) => {
    e.persist()
    let value = e.target.value;
    if(e.target.name === 'age' || 'id') {
        value = parseInt(value, 10);
    }
    this.setState(prevState => ({
        item: {
            ...prevState.item,
            [e.target.name]: value
        }
    }));
    };

    handleSubmit = e => {
        this.props.addSmurf(e, this.state);
        this.setState({
            item: {
                name: '',
                age: '',
                height: '',
                isLoading: false,
                error: null,
                id: ''
            }
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addSmurf = e => {
        e.preventDefault();
        console.log('addSmurf', e)
        this.props.addNewSmurf(this.state);
        this.setState({
           
                name: '',
                age: '',
                height: '',
            
        })
    }

    render() {
        if (this.props.fetching) {
            return (
                <p>loading...</p>
            )
        }
        return (
            <div className="card">
                <div className="form">
                <form onSubmit={this.addSmurf}>
                    <input
                        type='text'
                        name='name'
                        placeholder="Enter smurf's name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                        <input
                        type='text'
                        name='height'
                        placeholder="Enter smurf's height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                        <input
                        type='text'
                        name='age'
                        placeholder="Enter smurf's age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <button>Add Smurf</button>
            
                    {/* <button onClick={this.deleteSmurf}>Delete Smurf</button> */}
                </form>
            </div>


            <h1>1</h1>
            <SmurfList smurfs={this.props.smurfs} key={this.props.smurfs.name}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfReducer.smurfs,
        isLoading: state.smurfReducer.isLoading,
        error: state.smurfReducer.error,
        name: state.smurfReducer.name,
        age: state.smurfReducer.age,
        height: state.smurfReducer.height,
        id: state.smurfReducer.id,
        item: state.smurfReducer.item
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs, addNewSmurf, deleteSmurf }
)(SmurfView)