import axios from 'axios';

const BASE_URL = `http://localhost/cocktail-recipes/wp-json`

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const FETCH_COCKTAIL = 'FETCH_COCKTAIL';

export function fetchProducts(category) {
    var url = `${BASE_URL}/wp/v2/products`;

    if(category) {
        url = `${url}?filter[product_cat]=${category}`
    }

    const request = axios.get(url);

    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
}

export function fetchProduct(id) {
    if(!id) {
        return {
            type: FETCH_PRODUCT,
            payload: {}
        }
    }

    var url = `${BASE_URL}/wp/v2/products/${id}`;
    const request = axios.get(url);

    return {
        type: FETCH_PRODUCT,
        payload: request
    }
}

export function fetchCocktails(category) {
    var url = `${BASE_URL}/acf/v3/cocktails`;

    if(category) {
        url = `${url}?filter[product_cat]=${category}`
    }

    const request = axios.get(url);

    return {
        type: FETCH_COCKTAILS,
        payload: request
    }
}

export function fetchCocktail(id) {
    if(!id) {
        return {
            type: FETCH_PRODUCT,
            payload: {}
        }
    }

    var url = `${BASE_URL}/wp/v2/cocktails/${id}`;
    const request = axios.get(url);

    return {
        type: FETCH_COCKTAIL,
        payload: request
    }
}
