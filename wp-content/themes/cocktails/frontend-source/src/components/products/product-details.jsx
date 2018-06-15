import React, {Component} from 'react';
import './product-details.scss';

class ProductDetails extends Component {

    render() {

        const product = this.props.data;

        return(
            <div className="product">
                <div className="product-img">
                    <img src={product.acf.image} alt={product.title.rendered} />
                </div>

                <h3 className="product-name">{product.title.rendered}</h3>
                <h5 className="product-distiller">Melbourne Moonshine</h5>
            </div>
        );
    }
}

export default ProductDetails;