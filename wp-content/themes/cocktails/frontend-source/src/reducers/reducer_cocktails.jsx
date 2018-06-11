import { FETCH_COCKTAILS, FETCH_COCKTAIL } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {

    switch(action.type) {
        case FETCH_COCKTAILS:
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_COCKTAIL:
            return { ...state, [action.payload.data.id]: action.payload.data };

        default:
            return state;
    }

}