import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import { fetchCocktail } from '../actions';

class Cocktail extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchCocktail(id);
    }

    renderIngredients() {
        return _.map(this.props.cocktail.data.acf.ingredients, ingredients => {

            return (
                <li key={ingredients.ingredient}>
                    {ingredients.ingredient} ({ingredients.measure})
                </li>
            )
        });
    }

    render() {

        if (!this.props.cocktail.data) {
            return (
                <div>Loading...</div>
            );
        }

        return(
            <div>
                <h1>{this.props.cocktail.data.acf.name}</h1>

                <h3>Ingredients</h3>
                {this.renderIngredients()}

                <h3>Instructions</h3>
                <p>{this.props.cocktail.data.acf.instructions}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cocktail: state.cocktail
    }
}

export default connect(mapStateToProps, { fetchCocktail })(Cocktail);
