const initialState = {
    smurfs: [{
        name: "James",
        age: "29",
        height: "6"
    }],
    isFetching: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
        case "FETCH_SMURF_START":
            return {
                ...state,
                isFetching: true
            };
        case "FETCH_SMURF_SUCCESS":
            return {
                ...state,
                isFetching: false,
                error: ""
            }
        case "FETCH_SMURF_ERROR":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case "ADD_SMURF_SUCCESS":
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
            return state;
    }
}