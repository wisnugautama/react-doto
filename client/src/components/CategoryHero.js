import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class CategoryHero extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="khusus">Doto 2 Heroes</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Hero Name</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.props.dota.map((list,index) => {
                                    return (
                                        <tr>
                                            <td> {index+1} </td>
                                            <td> <img src={`https://api.opendota.com${list.icon}`} alt=""></img> </td>
                                            <td> {list.localized_name} </td>
                                            <td> <Link to={`/details/hero/${list.id}`}>Show Details</Link> </td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CategoryHero