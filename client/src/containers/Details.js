import React, { Component } from 'react';
import axios from 'axios';
import Card from '../components/CardDetail';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            heroes: [],
            hero: ''
        }
    }

    componentDidMount() {
        axios.get('https://api.opendota.com/api/heroStats')
            .then((result) => {
                for (let i = 0; i < result.data.length; i++) {
                    if (result.data[i].id == this.props.match.params.id) {
                        this.setState({
                            hero: result.data[i]
                        })
                    }
                }
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
            <Card hero={this.state.hero}></Card>
        )
    }
}

export default Details