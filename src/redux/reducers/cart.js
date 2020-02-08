import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS } from '../actions/cart';

  const cart = JSON.parse(localStorage.getItem("cart"))
  const INITIAL_STATE = cart || []
export default function (state = INITIAL_STATE, action = {}) {
    let newState = state;
    switch (action.type) {
        case ADD_TO_CART:
            let existingIndex = findProductIndex(state, action.payload.id);
            if (existingIndex !== -1) {
                state[existingIndex].units += 1;
                newState= state.concat([]);
                break;
            }
            newState= state.concat(action.payload);
            break;

        case UPDATE_ITEM_UNITS:
            let existingItemIndex = findProductIndex(state, action.payload.id);
            state[existingItemIndex].units += action.payload.units;
            if (state[existingItemIndex].units === 0 ) {
                newState = [...state.slice(0, existingItemIndex), ...state.slice(existingItemIndex + 1)];break;
            }
            newState = state.concat([]);break;

        case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            newState = [...state.slice(0, indexToDel), ...state.slice(indexToDel + 1)];break;
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }
    localStorage.setItem("cart",JSON.stringify(newState))
    return newState;
}