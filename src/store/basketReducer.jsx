
const defaultBasket = {
    basket: 0
};


export const basketReducer = (state=defaultBasket, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            return {...state, basket: state.basket + action.payload}
        default:
            return state
    }
}
