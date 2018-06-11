import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';
import ProductReducer from './reducer_product';
import CocktailsReducer from './reducer_cocktails';

const rootReducer = combineReducers({
    products: ProductsReducer,
    product: ProductReducer,
    cocktails: CocktailsReducer
});

export default rootReducer;