import axios from 'axios';

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: "FETCH_SMURF_START" })
        axios
            .get("http://localhost:3333/smurfs")
            .then(response => {
                console.log("Axios: ",response.data)
                dispatch({ type: "FETCH_SMURF_SUCCESS", payload: response.data })
            })
            .catch(error => {
                console.log("Axios get error: ", error)
                dispatch({ type: "FETCH_SMURF_ERROR", payload: `${error.response.status} : ${error.response.data}` })
            })
    }
}

export const addSmurf = (newSmurf) => {
    return dispatch => {
        axios
            .post("http://localhost:3333/smurfs", newSmurf)
            .then(response => {
                console.log("Axios post: ", response);
                dispatch({ type: "ADD_SMURF_SUCCESS", payload: response.data })
            })
            .catch(error => {
                console.log("Axios post error: ", error);
            })
    }
}
