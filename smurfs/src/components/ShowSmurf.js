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
    console.log("ShowSmurf Props: ", props);
    return (
        // {console.log(props)}
        <div>
            {props.smurfs && props.smurfs.map(function(smurf, smurfIndex) {
                    return (
                        <div key={smurfIndex}>
                            <p>Name: {smurf.name}</p>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
                    )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    console.log("ShowSmurf mapStateToProps: ",state);
    return {
        smurfs: state.smurfReducer.smurfs,
        isFetching: state.smurfReducer.isFetching,
        error: state.smurfReducer.error
    };
}
export default connect(mapStateToProps, { fetchSmurf })(ShowSmurf);