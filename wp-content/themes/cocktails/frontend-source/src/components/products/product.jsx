import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import ProductDetails from './product-details';
import CocktailsByProduct from '../cocktails/cocktails-by-product';

import { fetchProduct } from '../../actions';

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
                <div>Unable to load data from server.</div>
            );
        }
        else if (!this.props.products[id]) {
            return (
                <div>Loading...</div>
            );
        }



        const product = this.props.products[id];

        return(
            <div>
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
