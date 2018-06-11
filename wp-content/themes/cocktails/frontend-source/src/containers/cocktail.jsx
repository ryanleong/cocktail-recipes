import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cocktail extends Component {

    render() {

        return(
            <div>cocktail
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         recipe: state.recipe
//     }
// }

export default connect(null)(Cocktail);
