import axios from 'axios';

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: "FETCH_SMURF_START" })
        axios
            .get("http://localhost:3333/smurfs")
            .then(response => {
                console.log("Axios: ",response.data[0])
                dispatch({ type: "FETCH_SMURF_SUCCESS", payload: response.data[0] })
            })
            .catch(error => {
                console.log("Error: ", error)
                dispatch({ type: "FETCH_SMURF_ERROR", payload: `${error.response.status} : ${error.response.data}` })
            })
    }
}

export const 