import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';
import CocktailsReducer from './reducer_cocktails';
import CocktailReducer from './reducer_cocktail';

const rootReducer = combineReducers({
    products: ProductsReducer,
    cocktails: CocktailsReducer,
    cocktail: CocktailReducer,
});

export default rootReducer;