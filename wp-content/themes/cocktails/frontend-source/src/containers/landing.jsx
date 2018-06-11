import React, { Component } from 'react';

import Products from '../components/products';

class Landing extends Component {

    render() {
        return (
            <div className='landing'>
                <Products />
            </div>
        );
    }
}

export default Landing;
