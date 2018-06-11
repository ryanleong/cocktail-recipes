import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import ProductDetails from '../components/product-details';
import Cocktails from '../components/cocktails';

import { fetchProduct, clearProduct } from '../actions';

class Product extends Component {

    componentDidMount() {
        if(!this.props.products || _.isEmpty(this.props.products)) {
            const { id } = this.props.match.params;
            this.props.fetchProduct(id);
        }
    }

    // componentWillUnmount() {
    //     this.props.clearProduct();
    // }

    render() {

        if (_.isEmpty(this.props.products)) {
            return (
                <div>Loading...</div>
            );
        }

        const { id } = this.props.match.params;
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

export default connect(mapStateToProps, { fetchProduct, clearProduct })(Product);
