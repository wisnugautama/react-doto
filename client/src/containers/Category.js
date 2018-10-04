import React, { Component } from 'react';
import axios from 'axios';
import CategoryHero from "../components/CategoryHero";

class Category extends Component {
    constructor() {
        super()
        this.state = {
            heroes: []
        }
    }

    componentDidMount() {
        axios.get('https://api.opendota.com/api/heroStats')
            .then((result) => {
                this.setState({
                    heroes: result.data
                })
            })
            .catch((err) => {
                alert(err.message)
            });
    }

    render() {
        return (
            <CategoryHero dota={this.state.heroes}></CategoryHero>
        )
    }
}

export default Category