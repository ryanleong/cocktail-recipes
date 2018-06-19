import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import ProductDetails from './product-details';

import { fetchProducts } from '../../actions';

import './products.scss';

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        
        const arrayFromObj = _.values(this.props.products); // convert object to array
        const sections = _.chunk(arrayFromObj, 10); // Split into chunks of 10 (2 dimensional array)
        
        return _.map(sections, (productWrapper, index) => { // Interate throw top level array

            return (
                <div className="products-wrapper" key={index}>
                    { 
                        _.map(productWrapper, product => { // interate through 2nd level array
                            return (
                                <Link to={`/${product.id}`} className="product-link" key={product.id}>
                                    <ProductDetails data={product} />
                                </Link>
                            )
                        })
                    }
                </div>
            )

        });
    }

    render() {

        if (this.props.products.error) {
            return (
                <div>Unable to load data from server.</div>
            );
        }
        else if (!this.props.products) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div id="page-wrapper">

                <div className="products-header">
                    <img src="wp-content/uploads/2018/06/snp_00061-giniversity-melbourne-gin-company-melbourne-moonshine.jpg" alt=""/>

                    <div className="overlay"></div>
                    <h1>Cocktails</h1>
                </div>

                <div className="products cont alt">
                    {this.renderProducts()}

                </div>
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