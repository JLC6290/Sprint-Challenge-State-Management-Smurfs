const initialState = {
    name: "James",
    age: "29",
    height: "6",
    id: "2",
    isFetching: false
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
            return state;
    }
}