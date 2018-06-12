import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import { fetchCocktail } from '../../actions';

class Cocktail extends Component {

    componentDidMount() {

        if(!this.props.cocktails || _.isEmpty(this.props.cocktails)) {
            const { id } = this.props.match.params;
            this.props.fetchCocktail(id);
        }

    }

    renderIngredients(cocktail) {
        return _.map(cocktail.acf.ingredients, ingredients => {

            return (
                <li key={ingredients.ingredient}>
                    {ingredients.ingredient} ({ingredients.measure})
                </li>
            )
        });
    }

    render() {

        const { id } = this.props.match.params;

        if (!this.props.cocktails[id]) {
            return (
                <div>Loading...</div>
            );
        }

        const cocktail = this.props.cocktails[id];

        return(
            <div>
                <h1>{cocktail.acf.name}</h1>

                <h3>Ingredients</h3>
                {this.renderIngredients(cocktail)}

                <h3>Instructions</h3>
                <p>{cocktail.acf.instructions}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, { fetchCocktail })(Cocktail);
