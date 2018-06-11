import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import ProductDetails from '../components/product-details';
import Cocktails from '../components/cocktails';

import { fetchProduct } from '../actions';

class Product extends Component {

    componentDidMount() {
        if(!this.props.products || _.isEmpty(this.props.products)) {
            const { id } = this.props.match.params;
            this.props.fetchProduct(id);
        }
    }

    render() {
        const { id } = this.props.match.params;

        if (!this.props.products[id]) {
            return (
                <div>Loading...</div>
            );
        }

        const product = this.props.products[id];

        return(
            <div>
                <ProductDetails data={product} />
                <Cocktails data={product} />
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
