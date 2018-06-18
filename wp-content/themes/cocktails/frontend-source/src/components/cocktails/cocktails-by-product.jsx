import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchCocktails } from '../../actions';

import './cocktails-by-product.scss';

class CocktailsByProduct extends Component {

    componentDidMount() {
        const category = this.props.data.acf.category.slug;
        this.props.fetchCocktails(category);
    }

    renderCocktailsList() {
        return _.map(this.props.cocktails, cocktail => {

            let cocktailImg = <img src="http://cocktails.spiritandpenance.com/wp-content/uploads/2018/06/snp_00061-giniversity-melbourne-gin-company-melbourne-moonshine.jpg" alt=""/>;

            if(cocktail.acf.image) {
                cocktailImg = <img src={cocktail.acf.image} alt=""/>
            }

            return (
                <Link to={`/cocktails/${cocktail.id}`} key={cocktail.id} className="cocktail">
                    <div className="cocktail-img">
                        {cocktailImg}
                    </div>

                    <h3 className="cocktail-name">
                        {cocktail.acf.name}
                    </h3>
                </Link>
            )
        });
    }

    render() {
        if (this.props.cocktails.error) {
            return (
                <div>Unable to load data from server.</div>
            );
        }
        else if (!this.props.cocktails) {
            return (
                <div>Loading...</div>
            );
        }


        return(
            <div className="product-cocktails">
                <h2 className="title">Cocktails</h2>

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

export default connect(mapStateToProps, { fetchCocktails })(CocktailsByProduct);
