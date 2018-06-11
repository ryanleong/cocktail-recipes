import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';
import ProductReducer from './reducer_product';
import CocktailsReducer from './reducer_cocktails';
import CocktailReducer from './reducer_cocktail';

const rootReducer = combineReducers({
    products: ProductsReducer,
    product: ProductReducer,
    cocktails: CocktailsReducer,
    cocktail: CocktailReducer,
});

export default rootReducer;