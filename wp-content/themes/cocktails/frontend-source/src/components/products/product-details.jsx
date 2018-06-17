import React, {Component} from 'react';
import './product-details.scss';

class ProductDetails extends Component {

    // decode html codes as string
    // https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
    htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        // handle case of empty input
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    render() {

        const product = this.props.data;

        return(
            <div className="product">
                <div className="product-img">
                    <img src={product.acf.image} alt={product.title.rendered} />
                </div>

                <div className="product-details">
                    <h3 className="product-name">{this.htmlDecode(product.title.rendered)}</h3>
                    <h5 className="product-distiller">Melbourne Moonshine</h5>
                </div>
            </div>
        );
    }
}

export default ProductDetails;