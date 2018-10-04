import React from 'react';
import getTeams from '../actions/team';
import { connect } from "react-redux";

class TeamTable extends React.Component {
    render() {
        console.log(this.props.listTeam.loading)
        return (
            <div>
                <h1>Doto 2 Pro Teams</h1>
                <hr></hr>
                <div className="row ab">
                    {
                        this.props.listTeam.loading == true ? <img className="loading" src={`http://www.thepaulbangalore.in/languages/css/loader.gif`}></img> : (
                        this.props.listTeam.teams.map((list, index) => {
                            return (
                                <div className="col-xs-6">
                                    <div class="card team">
                                        {
                                            !list.logo_url ? <img src={`https://cdn.browshot.com/static/images/not-found.png`} alt="" /> : <img className="zoom" src={list.logo_url} alt="" />
                                        }
                                        <div class="card-body">
                                            <h5 class="card-title">{list.name}</h5>
                                            <p class="card-text">Wins : {list.wins}</p>
                                            <p class="card-text">Losses : {list.losses}</p>
                                            <p class="card-text">Rating : {list.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getAllTeam()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTeam: () => {
            dispatch(getTeams())
        }
    }
}

const mapStatetoProps = state => {
    return {
        listTeam: state.teams
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(TeamTable)