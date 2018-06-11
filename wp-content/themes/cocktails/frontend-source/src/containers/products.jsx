import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import ProductDetails from '../components/product-details';

import { fetchProducts } from '../actions';

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        return _.map(this.props.products, product => {
            return (
                <div className="product" key={product.id}>
                    <Link className="btn btn-primary" to={`/${product.id}`}>

                        <ProductDetails data={product} />

                    </Link>
                </div>
            )
        });
    }

    render() {

        if (!this.props.products) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        products: state.products
    };
}

export default connect(mapStateToProps, { fetchProducts })(Products);