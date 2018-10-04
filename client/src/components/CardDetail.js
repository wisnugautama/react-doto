import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Card extends Component {
    render () {
        return (
            <div className="container">
            <h1>{this.props.hero.localized_name}</h1>
                <div className="card detail-card">
                    <img className="card-img-top" src={`https://api.opendota.com${this.props.hero.img}`} alt=""></img>
                    <div className="card-body">
                        <p className="card-text">Hero : {this.props.hero.localized_name}</p>
                        <p className="card-text">Attack Type : {this.props.hero.attack_type}</p>
                        <p className="card-text">Hero Type : {this.props.hero.primary_attr}</p>
                    </div>
                </div>
                <br></br>
                <button className="btn">
                    <Link to="/heroes">Back</Link>
                </button>
            </div>
        )
    }
}

export default Card