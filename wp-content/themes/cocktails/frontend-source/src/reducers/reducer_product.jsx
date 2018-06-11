import { FETCH_PRODUCT, CLEAR_PRODUCT } from '../actions';

export default function(state = {}, action) {

    switch(action.type) {
        case FETCH_PRODUCT:
            return action.payload;

        case CLEAR_PRODUCT:
            return action.payload;
        
        default:
            return state;
    }

}