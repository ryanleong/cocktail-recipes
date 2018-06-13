import React, {Component} from 'react';
import './product-details.scss';

class ProductDetails extends Component {

    render() {

        const product = this.props.data;

        return(
            <div className="product-details">
                <h3>{product.title.rendered}</h3>
                <img src={product.acf.image} alt={product.title.rendered}/>
            </div>
        );
    }
}

export default ProductDetails;