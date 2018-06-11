import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProductDetails from '../components/product-details';
import Cocktails from '../components/cocktails';

import { fetchProduct } from '../actions';

class Product extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchProduct(id);
    }

    render() {

        if (!this.props.product.data) {
            return (
                <div>Loading...</div>
            );
        }

        return(
            <div>
                <ProductDetails data={this.props.product.data} />
                <Cocktails data={this.props.product.data} />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        product: state.product
    }
}

export default connect(mapStateToProps, { fetchProduct })(Product);
