import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ListHero extends Component {
    render() {
        // console.log('props', this.props.heroes[1]);
        return (
            <div className="container-fluid">
                <h1>Doto 2</h1>
                <img width="50%" src="https://media.giphy.com/media/3ohzdSDgGwT5CaWMTu/giphy.gif" alt=""></img>
                <div className="row home">
                    {
                        this.props.heroes.map((list, i) => {
                            return (
                                <div className="col-xs-4 zoom" key={i}>
                                    <div className="card">
                                        <Link to={`/details/hero/${list.id}`}><img className="card-img-top" src={`https://api.opendota.com${list.img}`} alt=""></img></Link>
                                        {/* <div className="card-body">
                                    <p className="card-text">{list.localized_name}</p>
                                </div> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListHero;