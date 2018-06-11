import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';
import CocktailsReducer from './reducer_cocktails';

const rootReducer = combineReducers({
    products: ProductsReducer,
    cocktails: CocktailsReducer,
});

export default rootReducer;