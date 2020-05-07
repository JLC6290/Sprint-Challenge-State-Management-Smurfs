import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../store/actions/smurfAction';

const AddSmurf = props => {
    console.log("AddSmurf props: ", props)

    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChanges = event => {
        console.log("event.target.name: ",event.target.name);
        setFormState({ 
            ...formState,
            [event.target.name]: event.target.value
        })
        console.log("handleChanges after setFormState: ", formState)
    }

    const formSubmit = event => {
        event.preventDefault();
        console.log("event: ", event);
        // const newFormData = {
        //     ...formState,
        // }
        // setFormState(newFormData);
        // console.log("InputChange updated formState", formState)
        props.addSmurf(formState);
        setFormState({
            name: "",
            age: "",
            height: ""
        })
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor="smurfName">
                    New Smurf Name:
                   <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChanges}
                    />
                </label>
                <br />
                <label htmlFor="smurfAge">
                    New Smurf Age:
                   <input
                        type="text"
                        name="age"
                        value={formState.age}
                        onChange={handleChanges}
                    />
                </label>
                <br />
                <label htmlFor="smurfHeight">
                    New Smurf Height:
                   <input
                        type="text"
                        name="height"
                        value={formState.height}
                        onChange={handleChanges}
                    />
                </label>
                <br />
                <button type="submit">Submit Smurf</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    console.log("State mapped to AddSmurf: ", state);
    return {
        name: state.smurfReducer.name,
        age: state.smurfReducer.age,
        height: state.smurfReducer.height,
        isFetching: state.smurfReducer.isFetching,
        error: state.smurfReducer.error
    };
}

export default connect(mapStateToProps, { addSmurf })(AddSmurf);