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
        return _.map(this.props.products, product => {
            return (
                <Link to={`/${product.id}`} key={product.id}>
                    <ProductDetails data={product} />
                </Link>
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

                {/* <div className="products-header">
                    <h1>Cocktails for your Spirits</h1>
                </div> */}

                <div className="products cont">
                    {this.renderProducts()}


                    
                    <Link to={`/adsfsd`}>
                        <div className="product">
                            <div className="product-img">
                                <img src="http://via.placeholder.com/350x150" alt="asdfds" />
                            </div>

                            <h3 className="product-name">Test title</h3>
                            <h5 className="product-distiller">Test Distiller</h5>
                        </div>
                    </Link>
                    <Link to={`/adsfsd`}>
                        <div className="product">
                            <div className="product-img">
                                <img src="http://via.placeholder.com/350x150" alt="asdfds" />
                            </div>

                            <h3 className="product-name">Test title</h3>
                            <h5 className="product-distiller">Test Distiller</h5>
                        </div>
                    </Link>
                    <Link to={`/adsfsd`}>
                        <div className="product">
                            <div className="product-img">
                                <img src="http://via.placeholder.com/350x150" alt="asdfds" />
                            </div>

                            <h3 className="product-name">Test title</h3>
                            <h5 className="product-distiller">Test Distiller</h5>
                        </div>
                    </Link>
                    <Link to={`/adsfsd`}>
                        <div className="product">
                            <div className="product-img">
                                <img src="http://via.placeholder.com/350x150" alt="asdfds" />
                            </div>

                            <h3 className="product-name">Test title</h3>
                            <h5 className="product-distiller">Test Distiller</h5>
                        </div>
                    </Link>
                    <Link to={`/adsfsd`}>
                        <div className="product">
                            <div className="product-img">
                                <img src="http://via.placeholder.com/350x150" alt="asdfds" />
                            </div>

                            <h3 className="product-name">Test title</h3>
                            <h5 className="product-distiller">Test Distiller</h5>
                        </div>
                    </Link>
                    <Link to={`/adsfsd`}>
                        <div className="product">
                            <div className="product-img">
                                <img src="http://via.placeholder.com/350x150" alt="asdfds" />
                            </div>

                            <h3 className="product-name">Test title</h3>
                            <h5 className="product-distiller">Test Distiller</h5>
                        </div>
                    </Link>
                    <Link to={`/adsfsd`}>
                        <div className="product">
                            <div className="product-img">
                                <img src="http://via.placeholder.com/350x150" alt="asdfds" />
                            </div>

                            <h3 className="product-name">Test title</h3>
                            <h5 className="product-distiller">Test Distiller</h5>
                        </div>
                    </Link>


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