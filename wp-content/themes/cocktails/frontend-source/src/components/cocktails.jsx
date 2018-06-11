import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchCocktails } from '../actions';


class Cocktails extends Component {

    componentDidMount() {
        const category = this.props.data.acf.category.slug;
        this.props.fetchCocktails(category);
    }

    renderCocktailsList() {
        return _.map(this.props.cocktails, cocktail => {
            return (
                <li key={cocktail.id}>
                    <Link to={`/cocktail/${cocktail.id}`}>{cocktail.acf.name}</Link>
                </li>
            )
        });
    }

    render() {
        if (!this.props.cocktails) {
            return (
                <div>Loading...</div>
            );
        }


        return(
            <div>
                Cocktails

                <ul>
                    {this.renderCocktailsList()}
                </ul>
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
