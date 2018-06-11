import React, {Component} from 'react';

class ProductDetails extends Component {

    render() {

        const product = this.props.data;

        return(
            <div>
                <h3>{product.title.rendered}</h3>
                <img src={product.acf.image} alt={product.title.rendered}/>
            </div>
        );
    }
}

export default ProductDetails;