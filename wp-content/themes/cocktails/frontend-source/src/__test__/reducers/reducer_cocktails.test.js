import CocktailsReducer from '../../reducers/reducer_cocktails';
import { FETCH_COCKTAILS, FETCH_COCKTAIL } from '../../actions';
import _ from 'lodash';

// Sample data
const state = {};

const payload = {
    data: [{"id":35,"date":"2018-06-11T00:33:28","date_gmt":"2018-06-10T16:33:28","guid":{"rendered":"http:\/\/cocktails.spiritandpenance.com\/?post_type=cocktails&#038;p=35"},"modified":"2018-06-11T00:39:29","modified_gmt":"2018-06-10T16:39:29","slug":"negroni","status":"publish","type":"cocktails","link":"http:\/\/cocktails.spiritandpenance.com\/cocktails\/negroni\/","title":{"rendered":"Negroni"},"featured_media":0,"template":"","product_cat":[2],"acf":{"name":"Negroni","image":false,"ingredients":[{"ingredient":"Gin","measure":"30ml"},{"ingredient":"Campari","measure":"30ml"},{"ingredient":"Sweet Vermouth","measure":"30ml"}],"glass":"Old-fashioned glass","instructions":"Stir into glass over ice, garnish and serve.","category":{"term_id":2,"name":"Gin","slug":"gin","term_group":0,"term_taxonomy_id":2,"taxonomy":"product_cat","description":"","parent":0,"count":3,"filter":"raw"}},"_links":{"self":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/cocktails\/35"}],"collection":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/cocktails"}],"about":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/types\/cocktails"}],"version-history":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/cocktails\/35\/revisions"}],"wp:attachment":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/media?parent=35"}],"wp:term":[{"taxonomy":"product_cat","embeddable":true,"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/product_cat?post=35"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":14,"date":"2018-06-10T23:58:11","date_gmt":"2018-06-10T15:58:11","guid":{"rendered":"http:\/\/cocktails.spiritandpenance.com\/?post_type=cocktails&#038;p=14"},"modified":"2018-06-11T00:26:15","modified_gmt":"2018-06-10T16:26:15","slug":"gin-tonic","status":"publish","type":"cocktails","link":"http:\/\/cocktails.spiritandpenance.com\/cocktails\/gin-tonic\/","title":{"rendered":"Gin &#038; Tonic"},"featured_media":29,"template":"","product_cat":[2],"acf":{"glass":"Highball glass","instructions":"Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.","ingredients":[{"ingredient":"Gin","measure":"60ml"},{"ingredient":"Tonic water","measure":"150ml"},{"ingredient":"Lime","measure":"1"}],"name":"Gin & Tonic","image":"http:\/\/cocktails.spiritandpenance.com\/wp-content\/uploads\/2018\/06\/ginandtonic.jpg","category":{"term_id":2,"name":"Gin","slug":"gin","term_group":0,"term_taxonomy_id":2,"taxonomy":"product_cat","description":"","parent":0,"count":3,"filter":"raw"}},"_links":{"self":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/cocktails\/14"}],"collection":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/cocktails"}],"about":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/types\/cocktails"}],"version-history":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/cocktails\/14\/revisions"}],"wp:featuredmedia":[{"embeddable":true,"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/media\/29"}],"wp:attachment":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/media?parent=14"}],"wp:term":[{"taxonomy":"product_cat","embeddable":true,"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/product_cat?post=14"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}]
};

const actionCocktails = {
    type: FETCH_COCKTAILS,
    payload: payload
};
const actionCocktail = {
    type: FETCH_COCKTAIL,
    payload: payload
};
const errorAction = {
    error: true,
};

describe('Cocktails Reducers', () => {

    it('has a default state', ()=> {
        expect( CocktailsReducer({}, {}) ).toEqual({});
    });


    it('action FETCH_COCKTAILS returns state with cocktails data', ()=> {
        expect( CocktailsReducer({}, actionCocktails) )
            .toEqual(_.mapKeys(actionCocktails.payload.data, 'id'));
    });

    it('action FETCH_COCKTAIL returns new state appended to empty old state', ()=> {
        expect( CocktailsReducer(state, actionCocktail) )
            .toEqual({ ...state, [actionCocktail.payload.data.id]: actionCocktail.payload.data });
    });

    it('action FETCH_COCKTAIL returns new state appended to old state', ()=> {

        const orignalState = { ...state, [actionCocktail.payload.data.id]: actionCocktail.payload.data };

        expect( CocktailsReducer(orignalState, actionCocktail) )
            .toEqual({ ...orignalState, [actionCocktail.payload.data.id]: actionCocktail.payload.data });
    });

    it('action return 404', ()=> {
        expect( CocktailsReducer({}, errorAction) ).toEqual(errorAction);
    });

});