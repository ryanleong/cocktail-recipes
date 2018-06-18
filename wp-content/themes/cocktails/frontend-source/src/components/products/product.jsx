import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import ProductDetails from './product-details';
import CocktailsByProduct from '../cocktails/cocktails-by-product';
import Error404 from '../errors/error-404';

import { fetchProduct } from '../../actions';

import './product.scss';

class Product extends Component {

    componentDidMount() {
        if(!this.props.products || _.isEmpty(this.props.products)) {
            const { id } = this.props.match.params;
            this.props.fetchProduct(id);
        }
    }

    render() {
        const { id } = this.props.match.params;

        if (this.props.products.error) {
            return (
                <Error404 />
            );
        }
        else if (!this.props.products[id]) {
            return (
                <div>Loading...</div>
            );
        }


        const product = this.props.products[id]; // get current product

        return(
            <div className="product-single cont">
                <ProductDetails data={product} />
                <CocktailsByProduct data={product} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { fetchProduct })(Product);
