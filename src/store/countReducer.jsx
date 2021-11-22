
const defaultCount = {
    count: []
}

export const countReducer = (state = defaultCount, action) => {
    switch (action.type) {
        case "DECR_COUNT":
            return {...state, count: [state.count - action.payload]}
        default:
            return state
    }
}