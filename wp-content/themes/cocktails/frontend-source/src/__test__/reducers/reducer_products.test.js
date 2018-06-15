import ProductsReducer from '../../reducers/reducer_products';
import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../../actions';
import _ from 'lodash';

// Sample data
const state = {};

const payload = {
    data: [{"id":38,"date":"2018-06-11T00:41:20","date_gmt":"2018-06-10T16:41:20","guid":{"rendered":"http:\/\/cocktails.spiritandpenance.com\/?post_type=products&#038;p=38"},"modified":"2018-06-11T16:44:08","modified_gmt":"2018-06-11T08:44:08","slug":"apple-pie-shine","status":"publish","type":"products","link":"http:\/\/cocktails.spiritandpenance.com\/products\/apple-pie-shine\/","title":{"rendered":"Apple Pie Shine"},"featured_media":0,"template":"","product_cat":[4],"distillery":[6],"acf":{"image":"http:\/\/cocktails.spiritandpenance.com\/wp-content\/uploads\/2018\/06\/ginandtonic.jpg","category":{"term_id":4,"name":"Moonshine","slug":"moonshine","term_group":0,"term_taxonomy_id":4,"taxonomy":"product_cat","description":"","parent":0,"count":1,"filter":"raw"}},"_links":{"self":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/products\/38"}],"collection":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/products"}],"about":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/types\/products"}],"version-history":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/products\/38\/revisions"}],"wp:attachment":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/media?parent=38"}],"wp:term":[{"taxonomy":"product_cat","embeddable":true,"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/product_cat?post=38"},{"taxonomy":"distillery","embeddable":true,"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/distillery?post=38"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":26,"date":"2018-06-11T00:39:42","date_gmt":"2018-06-10T16:39:42","guid":{"rendered":"http:\/\/cocktails.spiritandpenance.com\/?post_type=products&#038;p=26"},"modified":"2018-06-11T16:44:01","modified_gmt":"2018-06-11T08:44:01","slug":"giniversity-botanical-gin","status":"publish","type":"products","link":"http:\/\/cocktails.spiritandpenance.com\/products\/giniversity-botanical-gin\/","title":{"rendered":"Giniversity Botanical Gin"},"featured_media":0,"template":"","product_cat":[2],"distillery":[5],"acf":{"image":"http:\/\/cocktails.spiritandpenance.com\/wp-content\/uploads\/2018\/06\/snp_00077-giniversity-london-dry-gin.jpg","category":{"term_id":2,"name":"Gin","slug":"gin","term_group":0,"term_taxonomy_id":2,"taxonomy":"product_cat","description":"","parent":0,"count":3,"filter":"raw"}},"_links":{"self":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/products\/26"}],"collection":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/products"}],"about":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/types\/products"}],"version-history":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/products\/26\/revisions"}],"wp:attachment":[{"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/media?parent=26"}],"wp:term":[{"taxonomy":"product_cat","embeddable":true,"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/product_cat?post=26"},{"taxonomy":"distillery","embeddable":true,"href":"http:\/\/cocktails.spiritandpenance.com\/wp-json\/wp\/v2\/distillery?post=26"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}]
};

const actionProducts = {
    type: FETCH_PRODUCTS,
    payload: payload
};
const actionProduct = {
    type: FETCH_PRODUCT,
    payload: payload
};

describe('Products Reducers', () => {

    it('has a default state', ()=> {
        expect( ProductsReducer({}, {}) ).toEqual({});
    });


    it('action FETCH_PRODUCTS returns state with product data', ()=> {
        expect( ProductsReducer({}, actionProducts) )
            .toEqual(_.mapKeys(actionProducts.payload.data, 'id'));
    });

    it('action FETCH_PRODUCT returns new state appended to empty old state', ()=> {
        expect( ProductsReducer(state, actionProduct) )
            .toEqual({ ...state, [actionProduct.payload.data.id]: actionProduct.payload.data });
    });

    it('action FETCH_PRODUCT returns new state appended to old state', ()=> {

        const orignalState = { ...state, [actionProduct.payload.data.id]: actionProduct.payload.data };

        expect( ProductsReducer(orignalState, actionProduct) )
            .toEqual({ ...orignalState, [actionProduct.payload.data.id]: actionProduct.payload.data });
    });
});