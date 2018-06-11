import axios from 'axios';

const BASE_URL = `http://localhost/cocktail-recipes/wp-json/wp/v2`

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_MEDIA = 'FETCH_MEDIA';

export function fetchProducts(category) {
    let url = `${BASE_URL}/products`;

    if(category) {
        url = `${url}?filter[product_cat]=${category}`
    }

    const request = axios.get(url);

    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
}
