import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import { fetchCocktail } from '../../actions';

import './cocktail.scss';

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

        if (this.props.cocktails.error) {
            return (
                <div>Unable to load data from server.</div>
            );
        }

        else if (!this.props.cocktails[id]) {
            return (
                <div>Loading...</div>
            );
        }

        const cocktail = this.props.cocktails[id];
        
        let heroImg = <img src="http://cocktails.spiritandpenance.com/wp-content/uploads/2018/06/snp_00061-giniversity-melbourne-gin-company-melbourne-moonshine.jpg" alt=""/>;

        if(cocktail.acf.image) {
            heroImg = <img src={cocktail.acf.image} alt=""/>
        }

        return(
            <div className="cocktail-cont">

                <div className="cocktail-cont__hero">
                    {heroImg}
                </div>

                <div className="cont">
                    <h1 className="cocktail-cont__name">{cocktail.acf.name}</h1>

                    <h3>Ingredients</h3>
                    <p className="cocktail-cont__ingredients">
                        {this.renderIngredients(cocktail)}
                    </p>

                    <h3>Instructions</h3>
                    <p className="cocktail-cont__instructions">
                        {cocktail.acf.instructions}
                    </p>
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

export default connect(mapStateToProps, { fetchCocktail })(Cocktail);
