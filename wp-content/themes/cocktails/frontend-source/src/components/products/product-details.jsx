import React, {Component} from 'react';
import './product-details.scss';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {

    render() {

        const product = this.props.data;

        return(
            <Link to={`/${product.id}`} className="product">
                <div className="product-img">
                    <img src={product.acf.image} alt={product.title.rendered} />
                </div>

                {/* <h3 className="product-name">{product.title.rendered}</h3>
                <h5 className="product-distiller">Melbourne Moonshine</h5> */}
            </Link>
        );
    }
}

export default ProductDetails;