import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchSmurf } from '../store/actions/smurfAction';

const ShowSmurf = props => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "", 
        height: ""
    })

    useEffect(() => {
        props.fetchSmurf();
    }, [])

    return (
        <div>
            {console.log("This is ShowSmurf: ", smurf)}
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("ShowSmurf mapStateToProps: ",state);
    return {
        name: state.smurfReducer.name,
        age: state.smurfReducer.age,
        height: state.smurfReducer.height,
        isFetching: state.smurfReducer.isFetching,
        error: state.smurfReducer.error
    };
}
export default connect(mapStateToProps, { fetchSmurf })(ShowSmurf);