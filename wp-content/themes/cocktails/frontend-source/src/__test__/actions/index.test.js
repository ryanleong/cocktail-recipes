import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { fetchProducts, fetchProduct, fetchCocktails, fetchCocktail, BASE_URL, FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_COCKTAILS, FETCH_COCKTAIL } from '../../actions';


// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

describe('Actions', () => {

    describe('Product Actions', () => {
        it('fetches list of products from API', () => {

            let url = `${BASE_URL}/wp/v2/products`;

            // Mock any GET request
            // arguments for reply are (status, data, headers)
            mock.onGet(url).reply(200, {});

            let request = axios.get(url);


            expect( fetchProducts() )
                .toEqual({
                    type: FETCH_PRODUCTS,
                    payload: request
                });
        });

        it('fetches list of products from API based on category', () => {

            let cat = 'gin';
            let url = `${BASE_URL}/wp/v2/products?filter[product_cat]=${cat}`;

            // Mock any GET request
            // arguments for reply are (status, data, headers)
            mock.onGet(url).reply(200, {});

            let request = axios.get(url);

            expect( fetchProducts(cat) )
                .toEqual({
                    type: FETCH_PRODUCTS,
                    payload: request
                });
        });

        it('fetches single product from API', () => {

            let url = `${BASE_URL}/wp/v2/products/38`;

            // Mock any GET request
            // arguments for reply are (status, data, headers)
            mock.onGet(url).reply(200, {});

            let request = axios.get(url);

            expect( fetchProduct(38) )
                .toEqual({
                    type: FETCH_PRODUCT,
                    payload: request
                });
        });

    });



    describe('Cocktail Actions', () => {
        it('fetches list of cocktails from API', () => {

            let url = `${BASE_URL}/acf/v3/cocktails`;

            // Mock any GET request
            // arguments for reply are (status, data, headers)
            mock.onGet(url).reply(200, {});

            let request = axios.get(url);


            expect( fetchCocktails() )
                .toEqual({
                    type: FETCH_COCKTAILS,
                    payload: request
                });
        });

        it('fetches list of cocktails from API based on category', () => {

            let cat = 'gin';
            let url = `${BASE_URL}/acf/v3/cocktails?filter[product_cat]=${cat}`;

            // Mock any GET request
            // arguments for reply are (status, data, headers)
            mock.onGet(url).reply(200, {});

            let request = axios.get(url);

            expect( fetchCocktails(cat) )
                .toEqual({
                    type: FETCH_COCKTAILS,
                    payload: request
                });
        });

        it('fetches single cocktail from API', () => {

            let url = `${BASE_URL}/wp/v2/cocktails/35`;

            // Mock any GET request
            // arguments for reply are (status, data, headers)
            mock.onGet(url).reply(200, {});

            let request = axios.get(url);

            expect( fetchCocktail(35) )
                .toEqual({
                    type: FETCH_COCKTAIL,
                    payload: request
                });
        });

    });
});
