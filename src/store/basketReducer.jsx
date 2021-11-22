
const defaultBasket = {
    basket: []
};


export const basketReducer = (state=defaultBasket, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            return {...state, basket: state.basket.find(item => item.id === action.payload) ?
                    state.basket.map(item => item.id === action.payload ? { ...item, count: item.count + 1} : item) : [...state.basket, { id: action.payload, count: 1}]}
        default:
            return state
    }
}
