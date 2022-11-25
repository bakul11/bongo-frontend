import { toast } from "react-toastify";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/movFavAction";

const instilize = {
    cart: []
}

const movieFavReducer = (state = instilize, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const inCartItem = state.cart.find(i => i.data2._id === item.data2._id);

            if (inCartItem) {
                toast.error('already added this items')
                return {
                    ...state,
                    cart: state.cart.filter(i => i.data2._id === inCartItem.data2._id ? item : i)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, item]
                }
            }

        //remove form cart 
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.data2._id !== action.payload)
            }

        default:
            return state
    }
}

export default movieFavReducer;