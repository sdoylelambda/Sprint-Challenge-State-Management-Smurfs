import React from 'react';
import { connect } from 'react-redux';
import SmurfList from "../components/SmurfList";
import { getSmurfs } from '../actions';

class SmurfView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            smurfs: {
                    name: '',
                    age: '',
                    height: '',
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



    render() {
        return (
            <div>
            <h1>1</h1>
            <SmurfList />
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
        item: state.smurfReducer.item
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfView)