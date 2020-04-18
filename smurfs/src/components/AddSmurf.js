import React, { useState } from 'react';
import { connect } from 'react-redux';

const AddSmurf = props => {
    console.log("AddSmurf props: ", props)

    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: ""
    })

    const formSubmit = event => {
        console.log("event: ", event);
        const newFormData = {
            ...formState,
        }
        setFormState(newFormData);
        console.log("InputChange updated formState", formState)
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
                    />
                </label>
                <br />
                <label htmlFor="smurfAge">
                    New Smurf Age:
                   <input
                        type="text"
                        name="age"
                        value={formState.age}
                    />
                </label>
                <br />
                <label htmlFor="smurfHeight">
                    New Smurf Height:
                   <input
                        type="text"
                        name="height"
                        value={formState.height}
                    />
                </label>
                <br />
                <button type="submit">Submit Smurf</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    console.log()
    return {
        name: state.smurfReducer.name,
        age: state.smurfReducer.age,
        height: state.smurfReducer.height,
        isFetching: state.smurfReducer.isFetching,
        error: state.smurfReducer.error
    };
}

export default connect(mapStateToProps, {})(AddSmurf);