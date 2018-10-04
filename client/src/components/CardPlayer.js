import React from 'react';
import { connect } from 'react-redux';

class CardPlayer extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.props.listPlayer.loading == true ? <img className="loading" src={`http://www.thepaulbangalore.in/languages/css/loader.gif`}></img> : (
                            this.props.listPlayer.players.map((list, index) => {
                                return (
                                    <div className="col-xs-6" key={index}>
                                        <div class="card team">
                                            {
                                                !list.avatarfull ? <img src={`https://cdn.browshot.com/static/images/not-found.png`} alt="" /> : <img className="zoom" src={list.avatarfull} alt="" />
                                            }
                                            <p> {list.personaname} </p>
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
}

const mapStateToProps = (state) => {
    return {
        listPlayer: state.players
    }
}

export default connect(mapStateToProps,null)(CardPlayer)
