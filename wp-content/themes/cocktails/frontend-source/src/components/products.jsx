import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../actions';

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        return _.map(this.props.products.data, product => {
            return (
                <div className="product" key={product.id}>

                    <Link className="btn btn-primary" to={`/${product.id}`}>

                        <h3>{product.title.rendered}</h3>
                        <img src={product.acf.image} alt={product.title.rendered}/>

                    </Link>
                    
                </div>
            )
        });
    }

    render() {
        if (!this.props.products.data) {
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