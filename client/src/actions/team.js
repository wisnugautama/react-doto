import axios from 'axios';

function getTeams() {
    return dispatch => {
        dispatch({type: 'GET_TEAMS_REQUEST'})
        axios({
            method: 'get',
            url: `https://api.opendota.com/api/teams`
        })
            .then(({ data }) => {
                dispatch({type: 'GET_TEAMS_SUCCESS', payload: data.slice(0,52) })
                console.log(data.slice(0,10));
            })
            .catch((err) => {
                dispatch({type: 'GET_TEAMS_ERROR', payload: err.response})
            });
    }
}

export default getTeams 

