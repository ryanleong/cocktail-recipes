import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchCocktails } from '../../actions';

class Cocktails extends Component {

    componentDidMount() {
        this.props.fetchCocktails();
    }

    renderCocktailsList() {
        return _.map(this.props.cocktails, cocktail => {
            return (
                <div key={cocktail.id}>
                    <Link to={`/cocktails/${cocktail.id}`}>
                        {cocktail.acf.name}
                    </Link>
                </div>
            )
        });
    }

    render() {
        if (!this.props.cocktails) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                <h1>Cocktails List</h1>

                <div className="cocktails">
                    {this.renderCocktailsList()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, { fetchCocktails })(Cocktails);
