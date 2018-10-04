import React, { Component } from 'react';
import axios from 'axios';
import ListHero from '../components/ListHero';

class Home extends Component {
    constructor () {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://api.opendota.com/api/heroStats')
          .then((result) => {
            this.setState({
              data: result.data
            })
          })
          .catch((err) => {
            alert(err.message)
          });
    }

    render () {
        return (
            <ListHero heroes={this.state.data}></ListHero>
        )
    }
}

export default Home