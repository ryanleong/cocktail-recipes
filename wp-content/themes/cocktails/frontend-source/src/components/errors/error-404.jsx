import React, { Component } from 'react';

import './error-404.scss';

class Error404 extends Component {

    render() {
        return(
            <div className="error-404 cont">
                <h1>404</h1>
                <p>Content could not be found.</p>
            </div>
        );
    }
}

export default Error404;