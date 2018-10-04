import React from 'react';
import getPlayer from '../actions/player';
import { connect } from "react-redux";
import CardPlayer from '../components/CardPlayer';

class SearchForm extends React.Component {
    constructor() {
        super()
        this.state = {
            nickname: ''
        }
    }

    setNicknameToAction = (event) => {
        event.preventDefault()
        this.props.searchPlayer(this.state.nickname)
    }

    setNickname = (event) => {
        this.setState({
            nickname: event.target.value
        })
    }

    render() {
        return (
            <div className="container cont-player">
            <h1>Doto 2 Players</h1>
                <form onSubmit={this.setNicknameToAction}>
                    <input onChange={this.setNickname} className="form-control mr-sm-2 cari" type="search" placeholder="Search Nickname" aria-label="Search"></input>
                    <button className="btn btn-dark" type="submit">Search</button>
                    <hr></hr>
                </form>
                <CardPlayer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchPlayer: (nickname) => {
            dispatch(getPlayer(nickname))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchForm)

